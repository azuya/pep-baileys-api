import { getSession, numberExist } from './../whatsapp.js'
import response from './../response.js'

const check = async (req, res) => {
    try {
        const session = getSession(res.locals.sessionId)
        const { message } = req.body

        const exists = await numberExist(session, jid)
        if (!exists) {
            return response(res, 200, false, 'The receiver number is not exists.')
        }
        response(res, 200, true, 'The receiver number is exists')
    } catch (e) {
        const message = 'An error occured during jid check. NO JID'

        response(res, 400, false, message)
        // res.status(500).json({ error: message })
    }
}

export { check }
