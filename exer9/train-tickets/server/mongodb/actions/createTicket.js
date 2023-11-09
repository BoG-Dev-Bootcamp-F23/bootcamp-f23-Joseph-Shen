import Ticket from "../models/Ticket.js"
import connectDB from "../index.js"

export default async function createTicket(data) {
    try {
        await connectDB();
        const newTicket = new Ticket(data);
        await newTicket.save();
    } catch (e) {
        console.log(e);
        throw new Error("Unable to create ticket. Invalid data or database issue.");
    }
}