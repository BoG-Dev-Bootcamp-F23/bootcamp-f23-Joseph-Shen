import User from "../models/User.js"
import connectDB from "../index.js"

export default async function createUser(data) {
    try {
        await connectDB();
        const newUser = new User(data);
        await newUser.save();
    } catch (e) {
        console.log(e);
        throw new Error("Unable to create user. Invalid data or database issue.");
    }
}