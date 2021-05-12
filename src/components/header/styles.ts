import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #f2ac05;
  height: 73px;
  padding: 0 50px;
  align-items: center;

  @media (max-width: 1000px) {
    height: 60px;
    padding: 0 40px;
  }

  @media (max-width: 540px) {
    padding: 0 20px;
  }

  @media (max-width: 410px) {
    padding: 0 14px;
  }

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

      @media (max-width: 1000px) {
        height: 20px;
        width: 25px;
        margin-right: 23px;
      }

      @media (max-width: 540px) {
        height: 15px;
        width: 20px;
        margin-right: 13px;
      }

      div {
        background: #fff;
        height: 3px;
        width: 100%;

        @media (max-width: 1000px) {
          height: 2.5px;
        }

        @media (max-width: 540px) {
          height: 2px;
        }
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

      @media (max-width: 1000px) {
        margin-right: 11px;
        font-size: 18px;
      }

      @media (max-width: 540px) {
        margin-right: 9px;
        font-size: 14px;
      }

      @media (max-width: 350px) {
        font-size: 12px;
      }
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;

      @media (max-width: 1000px) {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }

      @media (max-width: 540px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
      }

      @media (max-width: 350px) {
        width: 25px;
        height: 25px;
        border-radius: 12.5px;
      }
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

        @media (max-width: 1000px) {
          font-size: 18px;
        }

        @media (max-width: 540px) {
          font-size: 14px;
        }

        &:hover {
          color: #f2f2f2;
        }
      }

      &:first-child {
        margin-right: 35px;

        @media (max-width: 1000px) {
          margin-right: 25px;
        }

        @media (max-width: 540px) {
          margin-right: 15px;
        }
      }
    }
  }
`
