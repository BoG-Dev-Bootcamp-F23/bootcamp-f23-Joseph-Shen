import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser.js";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const ticketID = req.query.ticketID;
            const userID = req.query.userID;
            console.log(ticketID)
            console.log(userID)
            const response = await updateTicketByUser({ticketID, userID});
            console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: User Not Found") {
                return res.status(400).json({"status": "User Not Found."});
            }
            else if (e.message.toString() === "Error: Ticket Not Found") {
                return res.status(400).json({"status": "Ticket Not Found."});
            }
            else return res.status(500).json({"status": "Failed to transfer tickets due to database issues."});
        }
    }
}
