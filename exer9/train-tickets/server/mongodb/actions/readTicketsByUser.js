import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { userID } = data;
        return await Ticket.find({userID: userID});
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read tickets. Invalid data or database issue.")
    }
}
