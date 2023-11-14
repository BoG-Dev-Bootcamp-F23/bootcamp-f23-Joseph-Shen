import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createUser(req.body);
            return res.status(200).json({"status": "Success!"});
        } catch (e) {
            return res.status(500).json({"status": "Failed to register user due to database issues."});
        }
    }
}