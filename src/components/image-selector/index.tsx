import { toast } from 'react-toastify'
import React, { useState, ChangeEvent } from 'react'
import api from '../../services/api'
import { Container, ImagePreview } from './styles'
import imagePlaceholder from '../../assets/images/image-placeholder.png'

type Props = {
  setFile: React.Dispatch<React.SetStateAction<string>>
  isClear: boolean
  setIsClear: React.Dispatch<React.SetStateAction<boolean>>
}

export const ImageSelector: React.FC<Props> = ({
  setFile,
  isClear,
  setIsClear,
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
    <Container>
      <label htmlFor="image">
        <ImagePreview preview={isClear ? '' : preview}>
          {isClear && (
            <div>
              <img src={imagePlaceholder} alt="" />
            </div>
          )}
        </ImagePreview>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  )
}
