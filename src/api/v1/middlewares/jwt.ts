import * as jwt from 'jsonwebtoken'
// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

export const verifyToken = async (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers['authorization']
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ')
    // Get token from array
    const bearerToken = bearer[1]
    // Set the token
    res.locals.token = bearerToken
    // Verify it
    try {
      let authData = await jwt.verify(res.locals.token, process.env.jwt)
      res.locals.authData = authData
    } catch (error) {
      return res.sendStatus(403)
    }
    // Next middleware
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }
}
