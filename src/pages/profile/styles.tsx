import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 84px;

  @media (max-width: 489px) {
    padding: 34px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 571px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 1px 8px #00000024;

    @media (max-width: 739px) {
      width: 100%;
    }

    @media (max-width: 489px) {
      //padding: 0 30px;
    }

    div.header {
      display: flex;
      align-items: center;
      padding-left: 24px;
      height: 55px;
      background: #f2ac05;
      border-radius: 6px 6px 0 0;

      span {
        color: #fff;
        font-size: 22px;
        font-weight: 400;
      }
    }

    div.content {
      display: flex;
      flex-direction: column;
      padding: 0 35px;
      align-items: center;

      & > input {
        background: #e9e9e9;
        color: #6f6f6f;
        margin-bottom: 13px;
        width: 271px;
        height: 43px;
        border-radius: 6px;
        padding: 0 11px;

        @media (max-width: 489px) {
          width: 100%;
        }
      }
    }

    div.button-container {
      display: flex;
      justify-content: center;
      margin: 38px 0 22px;

      @media (max-width: 489px) {
        width: 100%;
        margin: 0 0 22px;
        padding: 0 35px;
      }

      button {
        width: 214px;
        height: 42px;
        border-radius: 8px;
        background: #f2ac05;
        color: #fff;
        transition: background 0.2s;

        @media (max-width: 489px) {
          width: 100%;
        }

        &:hover {
          background: #d99a04;
        }
      }
    }
  }
`
