import styled, { css } from 'styled-components'

type Props = {
  preview: string
}

export const Container = styled.div`
  display: flex;
  align-self: center;

  label {
    cursor: pointer;

    input {
      display: none;
    }
  }
`

export const ImagePreview = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 150px;
  width: 150px;
  padding: 40px;
  margin: 14px 0 22px;
  border: 3px dashed #f2ac05;
  border-radius: 75px;
  transition: opacity 0.2s;

  img {
    height: 100%;
    width: 100%;
  }

  ${(props) =>
    props.preview &&
    css`
      background: url(${props.preview});
      background-size: 100% 100%;
      border-radius: 50%;
      background-repeat: no-repeat;
    `}

  &:hover {
    opacity: 0.8;
  }
`
