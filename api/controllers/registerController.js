const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
// const bcrypt = require('bcrypt');

const getAllUsers = (req, res) => {
    res.json(usersDB.users);
};

// Function to generate a random salt
function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

// Function to hash a password with a given salt
function hashPassword(password, salt) {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    return hash.digest('hex');
}

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.sendStatus(400).json({'message': 'Username and password are required.'});

    //check for duplicate usernames in the db
    const duplicate = usersDB.users.find(person => person.username === user);
    if(duplicate) return res.sendStatus(409); //conflict

    try{

        // Generate a random salt for the user
        const salt = generateSalt();

        // Hash the password with the salt
        const hashedPwd = hashPassword(pwd, salt);
        //encrypt the password
        // const hashedPwd = await bcrypt.hash(pwd, 10);
        
        //store the new user
        const newUser = { id: usersDB.users[usersDB.users.length - 1].id + 1 || 1, 'username': user, 'password': hashedPwd, 'salt': salt };
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created!`});
    }catch(err) {
        res.status(500).json({ 'message': err.message })
    }
}

const updateUsers = async(req, res) => {
    const users = usersDB.users.find(emp => emp.id === parseInt(req.body.id));
    if(!users) {
        return res.status(400).json({ "message": `users ID ${req.body.id} not found` });
    }
    if (req.body.user) users.user = req.body.user;
    if (req.body.pwd) users.pwd = req.body.pwd;
    const filteredArray = usersDB.users.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, users];
    usersDB.setUsers(unsortedArray.sort((a,b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );
    res.json(usersDB.users);
}

const deleteUsers = async(req, res) => {
    const users = usersDB.users.find(emp => emp.id === parseInt(req.params.id));
    if(!users) {
        return res.status(400).json({ "message": `users ID ${req.params.id} not found` });
    }
    if(usersDB.users.length === 1){
        return res.status(400).json({ "message": `Make sure there is more than one admin` });
    }
    const filteredArray = usersDB.users.filter(emp => emp.id !== parseInt(req.params.id));
    usersDB.setUsers([...filteredArray]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );
    res.json(usersDB.users);
}

module.exports = { 
    getAllUsers,
    handleNewUser,
    updateUsers,
    deleteUsers
 };