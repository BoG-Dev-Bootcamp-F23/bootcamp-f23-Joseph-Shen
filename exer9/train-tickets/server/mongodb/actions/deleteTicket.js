import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        await connectDB();
        const id = data.ticketID;
        const rp = await Ticket.findByIdAndDelete(id);
        if (rp === null) {
            throw new Error("Ticket Not Found");
        }
    } catch (e) {
        throw new Error(e);
    }
}