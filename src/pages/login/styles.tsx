import styled from 'styled-components'
import login from '../../assets/images/login.jpg'

export const Container = styled.div`
  background: linear-gradient(rgba(237, 170, 10, 0.3), rgba(237, 170, 10, 0.3)),
    url(${login}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
`

export const Content = styled.div`
  padding: 115px 90px 0;

  @media (max-width: 1000px) {
    padding: 90px 70px 0;
  }

  @media (max-width: 635px) {
    padding: 70px 50px 0;
  }

  @media (max-width: 500px) {
    padding: 50px 30px 0;
  }

  @media (max-width: 425px) {
    padding: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 395px;
    padding: 72px 35px;
    border-radius: 8px;
    background: #fff;

    @media (max-width: 1000px) {
      max-width: 350px;
      padding: 50px 28px;
    }

    @media (max-width: 635px) {
      max-width: 300px;
      padding: 30px 23px;
    }

    @media (max-width: 500px) {
      max-width: 250px;
      padding: 20px 17px;
    }

    @media (max-width: 425px) {
      max-width: 100%;
      padding: 30px 17px;
    }

    strong {
      font-size: 23px;
      margin-bottom: 19px;
      font-weight: 500;
      color: #909090;

      @media (max-width: 1000px) {
        font-size: 21px;
        margin-bottom: 17px;
      }

      @media (max-width: 635px) {
        font-size: 19px;
        margin-bottom: 15px;
      }

      @media (max-width: 500px) {
        font-size: 17px;
        margin-bottom: 13px;
      }

      @media (max-width: 425px) {
        font-size: 20px;
        margin-bottom: 17px;
      }
    }

    input {
      margin-bottom: 15px;
      padding: 0 19px;
      border-radius: 6px;
      height: 46px;
      font-size: 18px;
      font-weight: 500;
      background: #f9f4e8;
      color: #ca8e00;

      @media (max-width: 1000px) {
        margin-bottom: 13px;
        padding: 0 17px;
        border-radius: 6px;
        height: 43px;
        font-size: 16px;
      }

      @media (max-width: 635px) {
        margin-bottom: 11px;
        padding: 0 15px;
        border-radius: 5px;
        height: 40px;
        font-size: 14px;
      }

      @media (max-width: 500px) {
        margin-bottom: 9px;
        padding: 0 13px;
        border-radius: 4px;
        height: 37px;
        font-size: 12px;
      }

      @media (max-width: 425px) {
        margin-bottom: 12px;
        padding: 0 13px;
        border-radius: 5px;
        height: 47px;
        font-size: 17px;
      }

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

      @media (max-width: 1000px) {
        height: 51px;
        border-radius: 26px;
        font-size: 16px;
        margin-bottom: 30px;
      }

      @media (max-width: 635px) {
        height: 46px;
        border-radius: 24px;
        font-size: 14px;
        margin-bottom: 27px;
      }

      @media (max-width: 500px) {
        height: 41px;
        border-radius: 22px;
        font-size: 12px;
        margin-bottom: 24px;
      }

      @media (max-width: 500px) {
        height: 46px;
        border-radius: 22px;
        font-size: 17px;
        margin-bottom: 30px;
      }

      &:hover {
        background: #d99a04;
      }
    }
  }
`
