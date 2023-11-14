import createTicket from "../../../server/mongodb/actions/createTicket.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createTicket(req.body);
            return res.status(200).json({"status": "Success!"});
        } catch (e) {
            return res.status(500).json({"status": "Failed to buy ticket due to database issues."});
        }
    }
}
