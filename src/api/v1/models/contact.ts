import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

// create a schema
const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

// the schema is useless so far
// we need to create a model using it
const Contact = mongoose.model('Contacts', contactSchema)

// make this available to our users in our Node applications
export { Contact }
