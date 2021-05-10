import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, Menu } from '..'
import { useAuth } from '../../contexts/auth'
import { Container } from './styles'

type Props = {
  signed?: boolean
}

export const Header: React.FC<Props> = ({ signed }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)

  const { user } = useAuth()

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
      {signed ? (
        <div className="avatar-container">
          <span>{user.name}</span>
          <img src={user?.avatar?.url} alt={user.name} />
        </div>
      ) : (
        <div className="auth-container">
          <Link to="/login">
            <span>Login</span>
          </Link>
          <Link to="/signup">
            <span>Cadastre-se</span>
          </Link>
        </div>
      )}
    </Container>
  )
}
