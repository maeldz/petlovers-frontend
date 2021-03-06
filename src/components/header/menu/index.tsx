import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth'
import { Container, MenuContainer, Avatar } from './styles'

type Props = {
  handleMenuExpanded: () => void
  menuExpanded: boolean
}

export const Menu: React.FC<Props> = ({ handleMenuExpanded, menuExpanded }) => {
  const { signOut, user } = useAuth()

  return (
    <Container>
      <MenuContainer expanded={menuExpanded}>
        <button
          type="button"
          className="close-menu"
          onClick={() => handleMenuExpanded()}
        >
          <div />
          <div />
        </button>
        <Avatar>
          <div>
            <img src={user?.avatar?.url} alt={user.name} />
          </div>
          <strong>{user.name}</strong>
        </Avatar>
        <nav>
          <ul>
            <li>
              <Link to="/search">Procurar pets</Link>
            </li>
            <li>
              <Link to="/new-pet">Cadastrar pets</Link>
            </li>
            <li>
              <Link to="/my-pets">Meus pets</Link>
            </li>
            <li>
              <Link to="/profile">Configurações</Link>
            </li>
            <li>
              <button type="button" onClick={() => signOut()}>
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </MenuContainer>
      {menuExpanded && (
        <div
          className="overlay"
          role="none"
          onClick={() => handleMenuExpanded()}
        />
      )}
    </Container>
  )
}
