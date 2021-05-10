import styled from 'styled-components'

export const Container = styled.div`
  height: 290px;
  width: 290px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 1px 8px #00000024;

  div:first-child {
    position: relative;
    height: 165px;

    img {
      height: 165px;
      width: 290px;
      border-radius: 6px 6px 0 0;
    }

    strong {
      position: absolute;
      bottom: 10px;
      left: 14px;
      font-size: 26px;
      font-weight: 600;
      color: #fff;
    }
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    padding: 14px;

    span {
      color: #6f6f6f;
      margin-bottom: 5px;
    }

    span.breed {
      text-transform: capitalize;
      font-size: 18px;
      color: #6f6f6f;
    }

    span.age {
      font-size: 16px;
      font-weight: 600;
    }

    span.dewormed,
    .neutered {
      font-size: 16px;
      font-weight: 500;
    }
  }
`
