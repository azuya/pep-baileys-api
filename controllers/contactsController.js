
import {
    getSession,
    isExists,

} from './../whatsapp.js'
import response from './../response.js'


/* const getList = (req, res) => {
	try {
		const { sessionId } = req.params;
		const { cursor = undefined, limit = 25 } = req.query;
		const contacts = await prisma.contact.findMany({
			cursor: cursor ? { pkId: Number(cursor) } : undefined,
			take: Number(limit),
			skip: cursor ? 1 : 0,
			where: { id: { endsWith: "s.whatsapp.net" }, sessionId },
		});

		res.status(200).json({
			data: contacts,
			cursor:
				contacts.length !== 0 && contacts.length === Number(limit)
					? contacts[contacts.length - 1].pkId
					: null,
		});
	} catch (e) {
		const message = "An error occured during contact list";
		logger.error(e, message);
		res.status(500).json({ error: message });
	}
};

export const listBlocked: RequestHandler = async (req, res) => {
	try {
		const session = getSession(req.params.sessionId)!;
		const data = await session.fetchBlocklist();
		res.status(200).json(data);
	} catch (e) {
		const message = "An error occured during blocklist fetch";
		logger.error(e, message);
		res.status(500).json({ error: message });
	}
};

export const updateBlock: RequestHandler = async (req, res) => {
	try {
		const session = getSession(req.params.sessionId)!;
		const { jid, action = "block" } = req.body;

		const exists = await jidExists(session, jid);
		if (!exists) return res.status(400).json({ error: "Jid does not exists" });

		await session.updateBlockStatus(jid, action);
		res.status(200).json({ message: `Contact ${action}ed` });
	} catch (e) {
		const message = "An error occured during blocklist update";
		logger.error(e, message);
		res.status(500).json({ error: message });
	}
};
 */
const check = async (req, res) => {
    try {
        const session = getSession(res.locals.sessionId)
        const { message } = req.body

        const exists = await isExists(session, jid)
        if (!exists) {
            return response(res, 400, false, 'The receiver number is not exists.')
        }

        response(res, 200, true, 'The receiver number is exists')
    } catch (e) {
        const message = 'An error occured during jid check'
        logger.error(e, message)
		response(res, 500, false, message)
        // res.status(500).json({ error: message })
    }
}

export { check }
