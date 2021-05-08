import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '..'
import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <aside>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Cadastre-se</Link>
      </aside>
    </Container>
  )
}
