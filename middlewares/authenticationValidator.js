import response from './../response.js'

const validate = (req, res, next) => {
    const apiKeyHeader = process.env.AUTHENTICATION_GLOBAL_AUTH_TOKEN;
    if (apiKeyHeader === undefined) return next();
    const reqHeaderApiKey = req.headers["x-api-key"] || req.headers["X-API-Key"] || req.headers["apikey"];
    if (reqHeaderApiKey === apiKeyHeader) {
        return next();
    }
    
    const apiKey = req.get('apikey') ?? req.query.apikey

    if (!process.env.AUTHENTICATION_GLOBAL_AUTH_TOKEN) {
        return next()
    }

    if (apiKey !== process.env.AUTHENTICATION_GLOBAL_AUTH_TOKEN) {
        return response(res, 401, false, 'Authentication failed.')
    }

    next()
}

export default validate
