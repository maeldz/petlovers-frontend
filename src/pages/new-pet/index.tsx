import React, { useState, FormEventHandler, useRef } from 'react'
import { toast } from 'react-toastify'
import { DatePicker, Header, ImageSelector } from '../../components'
import api from '../../services/api'
import { Container, Content } from './styles'
import { newPetValidator } from '../../validators'

export const NewPet: React.FC = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [dewormed, setDewormed] = useState(false)
  const [neutered, setNeutered] = useState(false)
  const [birthday, setBirthday] = useState('')
  const [file, setFile] = useState('')
  const [isClear, setIsClear] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)

  const clearForm = (): void => {
    formRef.current?.reset()
    setFile('')
    setBirthday('')
    setIsClear(true)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault()
      const data = {
        name,
        breed,
        dewormed,
        neutered,
        birthday,
        imageId: Number(file),
      }
      const isValid = await newPetValidator(data)
      if (isValid) {
        await api.post('dogs', data)
        clearForm()
        toast.success('Pet cadastrado com sucesso!')
      } else {
        toast.error('Falha na operação, verifique seus dados!')
      }
    } catch (error) {
      toast.error('Falha no servidor, tente novamente mais tarde!')
    }
  }

  return (
    <Container>
      <Header signed />
      <Content>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="header">
            <span>Cadastrar doguinho</span>
          </div>
          <div className="content">
            <ImageSelector
              setFile={setFile}
              isClear={isClear}
              setIsClear={setIsClear}
            />
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <DatePicker setBirthday={setBirthday} birthday={birthday} />
            <select onChange={(e) => setBreed(e.target.value)}>
              <option value="">Raça</option>
              <option value="basset">Basset</option>
              <option value="buldogue">Buldogue</option>
              <option value="golden retriever">Golden Retriever</option>
              <option value="labrador">Labrador</option>
              <option value="lhasa apso">Lhasa Apso</option>
              <option value="maltes">Maltês</option>
              <option value="pastor alemão">Pastor-Alemão</option>
              <option value="pinscher">Pinscher</option>
              <option value="poodle">Poodle</option>
              <option value="pug">Pug</option>
              <option value="rottweiler">Rottweiler</option>
              <option value="schnauzer">Schnauzer</option>
              <option value="shih tzu">Shih Tzu</option>
              <option value="spitz alemão">Spitz Alemão</option>
            </select>
            <label>
              Vermifugado
              <input type="checkbox" onChange={() => setDewormed(!dewormed)} />
              <span />
            </label>
            <label>
              Castrado
              <input type="checkbox" onChange={() => setNeutered(!neutered)} />
              <span />
            </label>
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Content>
    </Container>
  )
}
