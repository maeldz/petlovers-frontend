import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #f2ac05;
  height: 73px;
  padding: 0 50px;
  align-items: center;

  section {
    display: flex;
    align-items: center;

    button {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 25px;
      width: 35px;
      margin-right: 40px;
      background: none;

      div {
        background: #fff;
        height: 3px;
        width: 100%;
      }
    }
  }

  div.avatar-container {
    display: flex;
    margin-left: auto;
    align-items: center;

    span {
      color: #fff;
      text-transform: capitalize;
      margin-right: 13px;
      font-size: 22px;
      font-weight: 500;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }

  div.auth-container {
    display: flex;
    margin-left: auto;
    flex-direction: row;

    a {
      span {
        font-size: 21px;
        color: #fff;
        transition: color 0.2s;

        &:hover {
          color: #f2f2f2;
        }
      }

      &:first-child {
        margin-right: 35px;
      }
    }
  }
`
