import React from 'react'
import { Container } from './styles'

type Props = {
  data: any
}

export const Result: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <div>
        <img src={data.image.url} alt={data.name} />
        <strong>{data.name}</strong>
      </div>
      <div>
        <span className="breed">{data.breed}</span>
        <span className="age">6 meses</span>
        {data.dewormed && <span className="dewormed">Vermifugado</span>}
        {data.neutered && <span className="neutered">Castrado</span>}
      </div>
    </Container>
  )
}
