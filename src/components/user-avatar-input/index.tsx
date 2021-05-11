import React, { ChangeEvent, useMemo } from 'react'
import { Container, ImagePreview } from './styles'
import imagePlaceholder from '../../assets/images/image-placeholder.png'

type Props = {
  preview: string
  isClear: boolean
  defaultImage?: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export const UserAvatarInput: React.FC<Props> = ({
  preview,
  isClear,
  defaultImage,
  handleChange,
}) => {
  const getPreview = useMemo(() => preview || defaultImage || '', [
    preview,
    defaultImage,
  ])

  return (
    <Container>
      <label htmlFor="image">
        <ImagePreview preview={getPreview}>
          {!defaultImage && isClear && (
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
