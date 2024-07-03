const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const URI = process.env.URI
const connect = async () => {
try {
     const res  = await mongoose.connect( URI)
     console.log("databasse connected");
} catch (error) {
    console.log("connection failed");
}}

connect();

const app = require("app")
app.listen(3000, () => console.log("server is running on PORT", 3000))