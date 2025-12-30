import mongoose from 'mongoose'

const connectDB = async () => { 
    try {
        await mongoose.connect('mongodb+srv://dbUser:Z5Qeb9vyE5oqsB1W@v1.ikwr5xk.mongodb.net/?appName=v1')
        console.log('MongoDB connected')
    } catch(err) { 
        console.err("Mongodb connection failed" + err.message);
        process.exit(1);
    }
}
export default connectDB