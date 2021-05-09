import React from 'react'
import { Link } from 'react-router-dom'
import { Container, MenuContainer, Avatar } from './styles'

type Props = {
  handleMenuExpanded: () => void
  menuExpanded: boolean
}

export const Menu: React.FC<Props> = ({ handleMenuExpanded, menuExpanded }) => {
  return (
    <Container>
      <MenuContainer expanded={menuExpanded}>
        <Avatar>
          <div>
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="Carlos Eduardo"
            />
          </div>
          <strong>Carlos Eduardo</strong>
        </Avatar>
        <nav>
          <ul>
            <li>
              <Link to="/">Procurar pets</Link>
            </li>
            <li>
              <Link to="/">Cadastrar pets</Link>
            </li>
            <li>
              <Link to="/">Meus pets</Link>
            </li>
            <li>
              <Link to="/">Configurações</Link>
            </li>
            <li>
              <Link to="/">Sair</Link>
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
