const express = require ('express');
const mongoose = require("mongoose")
const app = express();
const authR = require('./routes/auth')
var cors = require("cors");

const  dbURI = "mongodb+srv://dbuser:4KdEHjYvEj9re8Tt@cluster0.8jnyn.mongodb.net/contacts?retryWrites=true&w=majority"
app.use(cors());
app.use(express.json())
app.use('/api/auth',authR)

mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => console.log("live on port "+ PORT))
