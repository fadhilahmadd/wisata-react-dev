import express from 'express';
import dontenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js'

dontenv.config();
const app = express();
const port = process.env.PORT || 8000;

// db
mongoose.set("strictQuery", false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,            
        })
        console.log('db connect');
    } catch (err) {
        console.log('db error', err);
    }
}

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute)

app.listen(port, () => {
    connect()
    console.log('server listening on port', port)
})