import { toast } from 'react-toastify'
import React, { useState, ChangeEvent } from 'react'
import api from '../../services/api'

type InputProps = {
  preview: string
  isClear: boolean
  handleChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

type Props = {
  setFile: React.Dispatch<React.SetStateAction<string>>
  isClear: boolean
  setIsClear: React.Dispatch<React.SetStateAction<boolean>>
  input: React.FC<InputProps>
}

export const ImageSelector: React.FC<Props> = ({
  setFile,
  isClear,
  setIsClear,
  input: Component,
}) => {
  const [preview, setPreview] = useState('')

  async function handleChange(e: ChangeEvent<HTMLInputElement>): Promise<void> {
    try {
      const data = new FormData()
      if (e.target.files) {
        data.append('file', e.target.files[0])
      }

      const response = await api.post('files', data)

      const { id, url } = response.data

      setFile(id)
      setPreview(url)
      setIsClear(false)
    } catch (err) {
      toast.error('Ocorreu um erro ao enviar sua imagem, tente novamente')
    }
  }

  return (
    <Component
      preview={preview}
      isClear={isClear}
      handleChange={handleChange}
    />
  )
}
