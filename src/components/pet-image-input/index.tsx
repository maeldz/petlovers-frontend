import React, { ChangeEvent } from 'react'
import { Container, ImagePreview } from './styles'
import imagePlaceholder from '../../assets/images/image-placeholder.png'

type Props = {
  preview: string
  isClear: boolean
  handleChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export const PetImageInput: React.FC<Props> = ({
  preview,
  isClear,
  handleChange,
}) => {
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
