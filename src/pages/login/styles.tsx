import styled from 'styled-components'
import login from '../../assets/images/login.jpg'

export const Container = styled.div`
  background: linear-gradient(rgba(237, 170, 10, 0.3), rgba(237, 170, 10, 0.3)),
    url(${login}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
`

export const Content = styled.div`
  height: calc(100% - 73px);
  padding: 115px 90px 0;

  section {
    display: flex;
    flex-direction: column;
    max-width: 395px;
    padding: 72px 35px;
    border-radius: 8px;
    background: #fff;

    strong {
      font-size: 23px;
      margin-bottom: 19px;
      font-weight: 500;
      color: #909090;
    }

    input {
      margin-bottom: 15px;
      padding-left: 19px;
      border-radius: 6px;
      height: 46px;
      font-size: 18px;
      font-weight: 500;
      background: #f9f4e8;
      color: #ca8e00;

      &::placeholder {
        color: #ca8e00;
      }
    }

    button {
      height: 56px;
      border-radius: 28px;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 33px;
      background: #f2ac05;
      font-weight: 600;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: #d99a04;
      }
    }
  }
`
