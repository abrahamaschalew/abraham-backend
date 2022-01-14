export const validation = (schema) => async (req, res, next) => {
  const body = req.body

  try {
    await schema.validate(body)
    await next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
