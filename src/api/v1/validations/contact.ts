import * as yup from 'yup'

export const contactSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})
