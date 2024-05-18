import { getSession, isExists } from './../whatsapp.js'
import response from './../response.js'

const check = async (req, res) => {
    try {
        const session = getSession(res.locals.sessionId)
        const { jid } = req.params
        const exists = await isExists(session, jid)
        if (!exists) {
            return response(res, 200, false, 'The receiver number is not exists.')
        }
        response(res, 200, true, 'The receiver number is exists')
    } catch (e) {
        const message = 'An error occured during jid check. NO JID ' + jid

        response(res, 400, false, message)
        // res.status(500).json({ error: message })
    }
}

export { check }
