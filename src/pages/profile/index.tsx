import React, { useState, FormEventHandler, useRef } from 'react'
import { toast } from 'react-toastify'
import { Header, ImageSelector } from '../../components'
import api from '../../services/api'
import { Container, Content } from './styles'
import { profileValidator } from '../../validators'
import { UserAvatarInput } from '../../components/user-avatar-input'
import { useAuth } from '../../contexts/auth'

export const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [file, setFile] = useState('')
  const [isClear, setIsClear] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)

  const clearForm = (): void => {
    formRef.current?.reset()
    setFile('')
    setIsClear(true)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault()
      const data = {
        name,
        email,
        password,
        oldPassword,
        passwordConfirmation,
      }
      const isValid = await profileValidator(data)
      if (isValid) {
        const response = await api.put('users', {
          ...data,
          ...(file ? { avatar_id: Number(file) } : {}),
        })
        updateProfile({
          name,
          email,
          avatar: response.data.avatar,
        })
        clearForm()
        toast.success('Cadastrado atualizado com sucesso!')
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
            <span>Alterar dados</span>
          </div>
          <div className="content">
            <ImageSelector
              setFile={setFile}
              isClear={isClear}
              setIsClear={setIsClear}
              defaultImage={user.avatar?.url ? user.avatar.url : ''}
              input={UserAvatarInput}
            />
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
            />
            <input
              type="password"
              placeholder="Nova senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
            />
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Content>
    </Container>
  )
}
