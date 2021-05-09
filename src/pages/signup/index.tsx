import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Content } from './styles'

export const Signup: React.FC = () => {
  const { goBack } = useHistory()

  return (
    <Container>
      <Content>
        <section>
          <strong>Petlovers</strong>
          <span>Crie sua conta</span>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme a senha" />
          <button type="button" onClick={() => null}>
            Criar conta
          </button>
          <button type="button" onClick={() => goBack()}>
            Voltar
          </button>
        </section>
      </Content>
    </Container>
  )
}
