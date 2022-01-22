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

export const getContacts = async (req, res) => {
  try {
    // get contacts
    const contact = new ContactService()
    const contacts: any = await contact.contacts()
    if (contacts.length == 0)
      return res.status(404).json({ message: 'Not found any contact message' })
    res.status(500).json({ contacts })
  } catch (error) {
    res.status(400).json({ error })
  }
}
