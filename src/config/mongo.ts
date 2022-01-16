import mongoose from 'mongoose'

export const main = async () => {
  try {
    await mongoose.connect(process.env.mongodb)
  } catch (error) {
    console.log(error)
  }
}
