import { Admin } from '../models'
import crypto from 'crypto'
import { resolve } from 'path/posix'

export default class AdminService {
  login(form) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const user = await Admin.findOne({
          username: form.username,
          password: crypto.createHash('md5').update(form.password).digest('hex')
        })
        if (user == null) return reject()
        resolve(user)
      } catch (error) {
        reject()
      }
    })
  }
}
