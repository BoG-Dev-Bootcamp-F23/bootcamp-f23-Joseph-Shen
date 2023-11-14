import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const {ticketID, userID} = data;
        const user = await User.findById(userID);
        if (user === null) {
            throw new Error("User Not Found");
        }
        const ticket = await Ticket.findByIdAndUpdate(ticketID, {userId : userID});
        if (ticket === null) {
            throw new Error("Ticket Not Found");
        }
    } catch (e) {
        throw new Error(e);
    }
}