import * as Yup from 'yup'

const newPetSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  birthday: Yup.string().required('O nascimento é obrigatório'),
  breed: Yup.string().required('A raça é obrigatória'),
  imageId: Yup.number().required('A imagem é obrigatória'),
  dewormed: Yup.boolean().required(),
  neutered: Yup.boolean().required(),
})

export const newPetValidator = async (data: any): Promise<any> => {
  return newPetSchema.isValid(data)
}
