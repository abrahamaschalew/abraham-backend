import * as yup from 'yup'

export const contactValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
})
