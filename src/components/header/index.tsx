import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './logo'
import { Menu } from './menu'
import { useAuth } from '../../contexts/auth'
import { Container } from './styles'

type Props = {
  signed?: boolean
}

export const Header: React.FC<Props> = ({ signed }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)

  const { user } = useAuth()

  const handleMenuExpanded = (): void => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.style.overflow = !menuExpanded ? 'hidden' : 'initial'

    setMenuExpanded(!menuExpanded)
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.style.overflow = 'initial'
  }, [])

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
          <Link to="/profile">
            <img src={user?.avatar?.url} alt={user.name} />
          </Link>
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
