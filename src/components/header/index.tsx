import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '..'
import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <aside>
        <Link to="/login">
          <span>Login</span>
        </Link>
        <Link to="/signup">
          <span>Cadastre-se</span>
        </Link>
      </aside>
    </Container>
  )
}
