import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, Menu } from '..'
import { Container } from './styles'

type Props = {
  signed?: boolean
}

export const Header: React.FC<Props> = ({ signed }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)

  const handleMenuExpanded = (): void => {
    setMenuExpanded(!menuExpanded)
  }

  return (
    <Container>
      <Menu
        handleMenuExpanded={handleMenuExpanded}
        menuExpanded={menuExpanded}
      />
      <section>
        {signed && (
          <button type="button" onClick={() => handleMenuExpanded()}>
            <div />
            <div />
            <div />
          </button>
        )}
        <Logo />
      </section>
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
