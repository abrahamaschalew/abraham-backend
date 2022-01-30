import jwt from 'jsonwebtoken'
import { AdminService } from '../services'

export const adminLogin = async (req, res) => {
  const form = {
    username: req.body.username,
    password: req.body.password
  }

  try {
    const user = new AdminService()
    const userData: any = await user.login(form)

    // Generate and provide a token for the user to use others route
    const token = await jwt.sign({ ...userData }, process.env.jwt, {
      expiresIn: '1800s'
    })

    res.status(200).json({ message: 'User logged In', token })
  } catch (error) {
    res.status(400).json({ message: "Sorry, the user coudn't found" })
  }
}

export const checkAuth = (req, res) => {
  res.status(200).json({ message: "You're logged In" })
}
