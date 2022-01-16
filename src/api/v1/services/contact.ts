import { Contact } from '../models'

export class contactService {
  myvar: string = 'hello'
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
}
