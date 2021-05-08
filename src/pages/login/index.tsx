import React from 'react'
import { Header } from '../../components'
import { Container, Content } from './styles'

export const Login: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <strong>Faça seu login</strong>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="button" onClick={() => null}>
            ENTRAR
          </button>
        </section>
      </Content>
    </Container>
  )
}
