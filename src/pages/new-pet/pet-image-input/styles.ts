import styled, { css } from 'styled-components'

type Props = {
  preview: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;

    input {
      display: none;
    }
  }
`

export const ImagePreview = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 202px;
  width: 342px;
  margin: 14px 0 22px;
  border: 3px dashed #f2ac05;
  border-radius: 8px;
  transition: opacity 0.2s;

  @media (max-width: 484px) {
    width: 100%;
    height: 180px;
    margin: 20px 0 20px;
  }

  div {
    height: 100px;
    width: 100px;

    @media (max-width: 484px) {
      height: calc(100vw * 0.2);
      width: calc(100vw * 0.2);
    }

    img {
      height: 100%;
      width: 100%;
    }
  }

  ${(props) =>
    props.preview &&
    css`
      background: url(${props.preview});
      background-size: 100% 100%;
      border-radius: 8px;
      background-repeat: no-repeat;
    `}

  &:hover {
    opacity: 0.8;
  }
`
