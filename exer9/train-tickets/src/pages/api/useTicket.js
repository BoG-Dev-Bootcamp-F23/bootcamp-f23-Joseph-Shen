import deleteTicket from "../../../server/mongodb/actions/deleteTicket.js";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const ticketID = req.query.ticketID;
            await deleteTicket({ ticketID });
            return res.status(200).json({"status": "Successfully use the ticket!"});
        } catch (e) {
            if (e.message.toString() === "Error: Ticket Not Found") {
                return res.status(400).json({"status": "Ticket Not Found."});
            }
            else return res.status(500).json({"status": "Failed to use ticket."});
        }
    }
}
