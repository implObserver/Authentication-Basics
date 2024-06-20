import 'dotenv/config'
import mongoose from 'mongoose';
// In Separate file
const mongoDB = process.env.MONGODB_URI;
//BUILD A CONNECTION
export const connectLibraryDB = () => {
    mongoose.connect(mongoDB).then(() => { console.log('Connected To database :)') })
        .catch(err => console.log('error', err));
}

export const disconnectLibraryDB = () => {
    mongoose.connection.close();
    console.log("Debug: Closing mongoose");
}