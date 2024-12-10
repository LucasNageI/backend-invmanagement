const customCorsMiddleware = (req, res, next) => {
    const origin = req.headers.origin
    const allowedOrigins = [
      ENVIRONMENT.FRONTEND_URL,
      "http://localhost:5173",
    ]
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin)
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    if (req.method === "OPTIONS") {
      return res.status(200).end()
    }
    next()
  }

  export default customCorsMiddleware