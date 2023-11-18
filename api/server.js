const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentions');

const PORT = process.env.PORT || 3500;

// custom midware logger
app.use(logger);

// Handle optoins credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials)

// Cross-Origin Resource Sharing
app.use(cors());

//to handle ulrencoded form data
app.use(express.urlencoded({extended: false}))

// built-in middleware for json
app.use(express.json());

// middleware for cookie
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, './public')));

app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

// app.use(verifyJWT);
app.use('/employee', require('./routes/api/employees'));
app.use('/news', require('./routes/api/news'));
app.use('/messages', require('./routes/api/messages'));
app.use('/users', require('./routes/api/users'));

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', 'notFound.html'))
    }else if(req.accepts('json')){
        res.json({ error: "404 Not Found" });
    }else{
        res.type('txt').send('404 Not Found');
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));