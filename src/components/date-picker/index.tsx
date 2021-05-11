import React, { useEffect, useState } from 'react'
import { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import { Picker } from './styles'

registerLocale('pt-BR', ptBR)

type Props = {
  setBirthday: React.Dispatch<React.SetStateAction<string>>
  birthday: string
}

export const DatePicker: React.FC<Props> = ({ setBirthday, birthday }) => {
  const [startDate, setStartDate] = useState<Date | null>(null)

  const handleChange = (date: Date): void => {
    setStartDate(date)
    setBirthday(date?.toISOString())
  }

  useEffect(() => {
    if (!birthday) {
      setStartDate(null)
    }
  }, [birthday])

  return (
    <Picker
      selected={startDate}
      dateFormat="dd/MM/yyyy"
      onChange={(date: Date) => handleChange(date)}
      locale="pt-BR"
      placeholderText="Nascimento"
    />
  )
}
