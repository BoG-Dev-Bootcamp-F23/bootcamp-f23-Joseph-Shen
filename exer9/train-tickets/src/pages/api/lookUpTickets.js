import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser.js";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const userID = req.query.userID;
            const response = await readTicketsByUser(userID);
            console.log(response);
            return res.status(200).json(response);
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: User Not Found") {
                return res.status(400).json({"status": "User Not Found."});
            }
            else return res.status(500).json({"status": "Failed to find tickets."});
        }
    }
}
