import React, { useState, useEffect } from 'react'
import { Header, Result } from '../../components'
import api from '../../services/api'
import { Container, Content } from './styles'

export const MyPets: React.FC = () => {
  const [myPets, setMyPets] = useState([])

  useEffect(() => {
    async function loadPets(): Promise<void> {
      const response = await api.get('dogs', {
        params: {
          myDogs: true,
        },
      })
      setMyPets(response.data)
    }

    loadPets()
  }, [])

  return (
    <Container>
      <Header signed />
      <Content>
        <strong>Meus pets cadastrados</strong>

        <section>
          <div className="grid">
            {myPets.map((result: any) => (
              <Result key={result.id} data={result} />
            ))}
          </div>
        </section>
      </Content>
    </Container>
  )
}
