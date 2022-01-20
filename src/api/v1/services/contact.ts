import { Contact } from '../models'

export class ContactService {
  postContact(contactForm) {
    // insert contact data into Contact collection
    const contact = new Contact(contactForm)

    return new Promise<void>(async (resolve, reject) => {
      try {
        await contact.save()
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  contacts() {
    return new Promise<void | any[]>(async (resolve, reject) => {
      try {
        const mycontacts = await Contact.find({})
        resolve([...mycontacts])
      } catch (error) {
        reject()
      }
    })
  }
}
