const dotenv  = require('dotenv')

const mongoose  = require('mongoose')

dotenv.config()


const URI = process.env.URI
const connectDb = async() => {
    try {
        const connect = await mongoose.connect(URI)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}
connectDb()


const app = require("./app")
app.listen(3000, console.log("server is running...."))