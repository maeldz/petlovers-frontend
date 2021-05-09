import React from 'react'
import { Link } from 'react-router-dom'
import { Container, LogoText } from './styles'

export const Logo: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <LogoText>Petlovers</LogoText>
      </Link>
    </Container>
  )
}
