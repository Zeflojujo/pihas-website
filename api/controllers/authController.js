const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const crypto = require('crypto');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fspromises = require('fs').promises;
const path = require('path');

function hashPassword(password, salt) {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    return hash.digest('hex');
}

const handleLogin = async (req, res) => {

    const user = req.body.user; 
    const pwd  = req.body.pwd;

    console.log(user, pwd)
    console.log(req.body);
    if( !user || !pwd ) return res.sendStatus(400).json( { 'message': 'Username and password are required.'});

    const foundUser = usersDB.users.find(person => person.username === user);
    if(!foundUser) return res.sendStatus(401); //unauthorized

    //evaluate password
    // Hash the entered password with the stored salt
    const hashedPassword = hashPassword(pwd, foundUser.salt);
    
    if(hashedPassword === foundUser.password) {
        //create JWT
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        //Saving refreshToken with current user
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fspromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
    }else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };