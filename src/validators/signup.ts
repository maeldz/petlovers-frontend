import * as Yup from 'yup'

const signupSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa conter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password')]),
})

export const signupValidator = async (data: any): Promise<any> => {
  return signupSchema.isValid(data)
}
