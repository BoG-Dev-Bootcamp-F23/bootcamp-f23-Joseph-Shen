import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketID, userID } = data;
        user = await User.findById(userID);
        if (user === null) {
            throw new Error("Invalide UserID");
        }
        ticket = await Ticket.findByIdAndUpdate(ticketID, {userID : userID});
        if (ticket === null) {
            throw new Error("Invalide TicketID");
        }
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update ticket. Invalid data or database issue.")
    }
}