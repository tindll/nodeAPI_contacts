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

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema);
// Tank.create({ size: 'small' }, function (err, small) {
//     if (err) return handleError(err);
//     else {console.log("added")}
//   });

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

app.listen(process.env.PORT, () => console.log("live, i think"))