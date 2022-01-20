import { AdminService } from '../services'

export const adminLogin = async (req, res) => {
  const form = {
    username: req.body.username,
    password: req.body.password
  }

  try {
    const user = new AdminService()
    const userData = await user.login(form)
    res.status(200).json({ message: 'User logged In', userData })
  } catch (error) {
    res.status(400).json({ message: "Sorry, the user coudn't found" })
  }
}
