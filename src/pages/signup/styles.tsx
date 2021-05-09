import styled from 'styled-components'
import signup from '../../assets/images/signup.jpg'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background: url(${signup}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 432px;
  align-items: center;
  justify-content: center;
  background: #f2ac05;

  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 55px;

    strong {
      font-size: 33px;
      margin-bottom: 30px;
      font-weight: 800;
      color: #fff;
      text-align: center;
    }

    span {
      font-size: 21px;
      margin-bottom: 19px;
      font-weight: 300;
      color: #fff;
    }

    input {
      margin-bottom: 15px;
      padding-left: 15px;
      border-radius: 6px;
      height: 43px;
      font-size: 15px;
      font-weight: 400;
      background: #fff;
      color: #6f6f6f;

      &::placeholder {
        color: #6f6f6f;
      }
    }

    button {
      height: 50px;
      border-radius: 25px;
      font-size: 17px;
      margin-bottom: 10px;
      background: #b88200;
      font-weight: 300;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: #a57500;
      }
    }
  }
`
