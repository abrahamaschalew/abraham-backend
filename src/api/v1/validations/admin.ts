import * as yup from 'yup'

export const adminValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
})
