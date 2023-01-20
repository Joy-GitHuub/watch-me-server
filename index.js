const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const colors = require('colors');





// Middleware
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));
const port = 5000 || 8080;


// Routers Require 
const userRouter = require('./Routers/User.Router');
const postRouter = require('./Routers/Post.Router');


// Routers App.use()
app.use('/api/watch-me/v1/user', userRouter);
app.use('/api/watch-me/v1/posts', postRouter)



app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Node JS Server Working is Perfect',
    });
});


app.listen(port, async () => {
    await console.log(`App is running on port ${port}`.yellow.bold);
});


const db = `mongodb+srv://watch-me-project:watch-me-project@cluster0.garvawt.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db).then(() => {
    console.log(`Watch-ME Database Connection is Successful`.green.bold);
});


module.exports = app;
// module.exports = app;