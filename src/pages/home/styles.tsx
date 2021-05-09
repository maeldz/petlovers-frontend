import styled from 'styled-components'
import home from '../../assets/images/home.jpg'

export const Container = styled.div`
  background: linear-gradient(to right, rgba(237, 170, 10, 0.7), transparent),
    url(${home}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
`

export const Content = styled.div`
  height: calc(100% - 73px);
  padding: 115px 90px 0;

  section {
    display: flex;
    max-width: 550px;
    flex-direction: column;

    strong.title {
      font-size: 60px;
      font-weight: 800;
      color: #fff;
    }

    strong.subtitle {
      font-size: 50px;
      font-weight: 800;
      color: #fff;
    }

    span.description {
      font-size: 23px;
      color: #fff;
      margin: 20px 0 35px;
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

        &:hover {
          background: #f2f2f2;
        }
      }
    }
  }
`
