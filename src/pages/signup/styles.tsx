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

  @media (max-width: 1170px) {
    width: 402px;
  }

  @media (max-width: 1000px) {
    width: 382px;
  }

  @media (max-width: 850px) {
    width: 342px;
  }

  @media (max-width: 720px) {
    width: 300px;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 55px;

    @media (max-width: 1170px) {
      padding: 0 50px;
    }

    @media (max-width: 1000px) {
      padding: 0 45px;
    }

    @media (max-width: 850px) {
      padding: 0 40px;
    }

    @media (max-width: 720px) {
      padding: 0 35px;
    }

    @media (max-width: 425px) {
      padding: 0 55px;
    }

    @media (max-width: 375px) {
      padding: 0 35px;
    }

    strong {
      font-size: 33px;
      margin-bottom: 30px;
      font-weight: 800;
      color: #fff;
      text-align: center;

      @media (max-width: 1170px) {
        font-size: 30px;
        margin-bottom: 27px;
      }

      @media (max-width: 1000px) {
        font-size: 27px;
        margin-bottom: 24px;
      }

      @media (max-width: 850px) {
        font-size: 23px;
        margin-bottom: 20px;
      }

      @media (max-width: 720px) {
        font-size: 20px;
        margin-bottom: 17px;
      }

      @media (max-width: 425px) {
        font-size: 33px;
        margin-bottom: 30px;
      }

      @media (max-width: 375px) {
        font-size: 30px;
        margin-bottom: 17px;
      }
    }

    span {
      font-size: 21px;
      margin-bottom: 19px;
      font-weight: 300;
      color: #fff;

      @media (max-width: 1170px) {
        font-size: 19px;
        margin-bottom: 17px;
      }

      @media (max-width: 1000px) {
        font-size: 17px;
        margin-bottom: 15px;
      }

      @media (max-width: 850px) {
        font-size: 15px;
        margin-bottom: 13px;
      }

      @media (max-width: 720px) {
        font-size: 13px;
        margin-bottom: 11px;
      }

      @media (max-width: 425px) {
        font-size: 21px;
        margin-bottom: 19px;
      }

      @media (max-width: 375px) {
        font-size: 18px;
        margin-bottom: 16px;
      }
    }

    input {
      margin-bottom: 15px;
      padding: 0 15px;
      border-radius: 6px;
      height: 43px;
      font-size: 15px;
      font-weight: 400;
      background: #fff;
      color: #6f6f6f;

      @media (max-width: 1170px) {
        margin-bottom: 13px;
        padding: 0 15px;
        border-radius: 6px;
        height: 40px;
        font-size: 14px;
      }

      @media (max-width: 1000px) {
        margin-bottom: 11px;
        padding: 0 13px;
        border-radius: 6px;
        height: 37px;
        font-size: 14px;
      }

      @media (max-width: 850px) {
        margin-bottom: 9px;
        padding: 0 11px;
        border-radius: 5px;
        height: 34px;
        font-size: 13px;
      }

      @media (max-width: 720px) {
        margin-bottom: 7px;
        padding: 0 9px;
        border-radius: 5px;
        height: 31px;
        font-size: 12px;
      }

      @media (max-width: 425px) {
        margin-bottom: 15px;
        padding: 0 15px;
        border-radius: 6px;
        height: 43px;
        font-size: 15px;
      }

      @media (max-width: 375px) {
        margin-bottom: 12px;
        padding: 0 12px;
        border-radius: 5px;
        height: 40px;
        font-size: 14px;
      }

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

      @media (max-width: 1170px) {
        height: 47px;
        border-radius: 25px;
        font-size: 15px;
        margin-bottom: 8px;
      }

      @media (max-width: 1000px) {
        height: 44px;
        border-radius: 23px;
        font-size: 15px;
        margin-bottom: 8px;
      }

      @media (max-width: 850px) {
        height: 41px;
        border-radius: 21px;
        font-size: 14px;
        margin-bottom: 6px;
      }

      @media (max-width: 720px) {
        height: 38px;
        border-radius: 19px;
        font-size: 13px;
        margin-bottom: 5px;
      }

      @media (max-width: 425px) {
        height: 50px;
        border-radius: 25px;
        font-size: 17px;
        margin-bottom: 10px;
      }

      @media (max-width: 375px) {
        height: 45px;
        border-radius: 25px;
        font-size: 14px;
        margin-bottom: 8px;
      }

      &:hover {
        background: #a57500;
      }
    }
  }
`
