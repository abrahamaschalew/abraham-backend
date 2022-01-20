import { ContactService } from '../services'

export const postContact = async (req, res) => {
  const contactForm = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }

  try {
    const contact = new ContactService()
    await contact.postContact(contactForm)
    // send thanks message
    res.status(200).json({ message: 'Thanks, I will touch with you soon' })
  } catch (error) {
    // send thanks message
    res.status(400).json({ message: `Something Wrong,  ${error}` })
  }
}

export const getContacts = (req, res) => {
  res.json({ message: 'Getting Contacts' })
  // JWT Auth
  // get contacts
  // send contacts
}
