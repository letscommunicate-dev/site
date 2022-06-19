import { gmail } from "../../libs/gmail";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, firstname, lastname, phone, message } = req.body;

        if (!email || !firstname || !lastname || !phone || !message) {
            return res.status(500).json({
                message: 'Please fill all fields!',
                success: false
            });
        }
        
        try {
            gmail({
                email,
                subject: `[website contact] ${firstname} ${lastname}`,
                text: `${firstname} ${lastname}
                ${phone}
        
                ${message}`,
            });
        
            return res.status(200).json({
                message: 'Thanks!',
                success: true
            });
        } catch (error) {
            console.log(error);
        
            return res.json({
                error,
                success: false
            });
        }
    }
}
