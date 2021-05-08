import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'
import { Container, Content } from './styles'

export const Home: React.FC = () => {
  const { push } = useHistory()
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <strong className="title">Tá sozinho?</strong>
          <strong className="subtitle">Adote um doguinho!</strong>
          <span className="description">
            A Petlovers te ajuda a encontrar o seu novo amiguinho. Basta clicar
            no botão abaixo!
          </span>
          <div>
            <button type="button" onClick={() => push('signin')}>
              Procurar doguineos
            </button>
          </div>
        </section>
      </Content>
    </Container>
  )
}
