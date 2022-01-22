import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// create a schema
const adminSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const Admin = mongoose.model('Admin', adminSchema)

export { Admin }
