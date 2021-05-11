import * as Yup from 'yup'

const profileSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um endereço de email válido')
    .required('O email é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword: any, field: any) =>
    oldPassword
      ? field
          .min(6, 'A senha precisa conter no mínimo 6 caracteres')
          .required('Digite a nova senha e confirme')
      : field
  ),
  passwordConfirmation: Yup.string().when(
    'password',
    (password: any, field: any) =>
      password
        ? field
            .required('A confirmação de senha é obrigatória')
            .oneOf([Yup.ref('password')], 'As senhas não correspondem')
        : field
  ),
})

export const profileValidator = async (data: any): Promise<any> => {
  return profileSchema.isValid(data)
}
