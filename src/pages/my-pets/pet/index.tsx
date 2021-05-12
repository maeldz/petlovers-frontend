/* eslint-disable import/no-duplicates */
import React, { useMemo } from 'react'
import { parseISO, intervalToDuration, formatDuration } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container } from './styles'

type Props = {
  data: any
}

export const Pet: React.FC<Props> = ({ data }) => {
  const age = useMemo(() => {
    const interval = intervalToDuration({
      start: parseISO(data.birthday),
      end: new Date(),
    })
    const date = formatDuration(
      { years: interval.years, months: interval.months },
      { locale: ptBR, delimiter: ' e ' }
    )
    return !date ? 'Menos de um mês' : date
  }, [data.birthday])

  return (
    <Container>
      <div>
        <img src={data.image?.url} alt={data.name} />
        <strong>{data.name}</strong>
      </div>
      <div>
        <span className="breed">{data.breed}</span>
        <span className="age">{age}</span>
        {data.dewormed && <span className="dewormed">Vermifugado</span>}
        {data.neutered && <span className="neutered">Castrado</span>}
      </div>
    </Container>
  )
}
