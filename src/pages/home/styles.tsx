import styled from 'styled-components'
import home from '../../assets/images/home.jpg'

export const Container = styled.div`
  background: linear-gradient(to right, rgba(237, 170, 10, 0.7), transparent),
    url(${home}) no-repeat center center fixed;
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

  section {
    display: flex;
    max-width: 550px;
    flex-direction: column;

    @media (max-width: 1000px) {
      max-width: 500px;
    }

    @media (max-width: 635px) {
      max-width: 450px;
    }

    @media (max-width: 500px) {
      max-width: 350px;
    }

    strong.title {
      font-size: 60px;
      font-weight: 800;
      color: #fff;

      @media (max-width: 1000px) {
        font-size: 50px;
      }

      @media (max-width: 635px) {
        font-size: 40px;
      }

      @media (max-width: 500px) {
        font-size: 30px;
      }
    }

    strong.subtitle {
      font-size: 50px;
      font-weight: 800;
      color: #fff;

      @media (max-width: 1000px) {
        font-size: 40px;
      }

      @media (max-width: 635px) {
        font-size: 30px;
      }

      @media (max-width: 500px) {
        font-size: 20px;
      }
    }

    span.description {
      font-size: 23px;
      color: #fff;
      margin: 20px 0 35px;

      @media (max-width: 1000px) {
        font-size: 20px;
        margin: 15px 0 30px;
      }

      @media (max-width: 635px) {
        font-size: 18px;
        margin: 10px 0 25px;
      }

      @media (max-width: 500px) {
        font-size: 16px;
        margin: 5px 0 20px;
      }
    }

    div {
      button {
        height: 70px;
        border-radius: 50px;
        padding: 0 50px;
        font-weight: 600;
        font-size: 22px;
        background: #fff;
        color: #c48c07;
        transition: background 0.2s;

        @media (max-width: 1000px) {
          height: 50px;
          font-size: 18px;
          padding: 0 30px;
          border-radius: 30px;
        }

        @media (max-width: 635px) {
          height: 40px;
          font-size: 14px;
          padding: 0 20px;
          border-radius: 20px;
        }

        @media (max-width: 500px) {
          height: 35px;
          font-size: 12px;
          padding: 0 20px;
          border-radius: 20px;
        }

        &:hover {
          background: #f2f2f2;
        }
      }
    }
  }
`
