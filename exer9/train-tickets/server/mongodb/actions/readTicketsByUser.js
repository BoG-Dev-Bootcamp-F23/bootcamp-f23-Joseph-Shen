import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const userID = data;
        const user = await User.findById(userID);
        if (user === null) {
            throw new Error("User Not Found");
        }
        return await Ticket.find({userId: userID});
    } catch (e) {
        throw new Error(e);
    }
}
