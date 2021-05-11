import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 84px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 571px;
    border-radius: 6px;
    margin-right: 63px;
    background: #fff;
    box-shadow: 0px 1px 8px #00000024;

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

      & > input {
        background: #e9e9e9;
        color: #6f6f6f;
        margin-bottom: 13px;
        width: 271px;
        height: 43px;
        border-radius: 6px;
        padding: 0 11px;
      }

      select {
        background: #e9e9e9;
        color: #6f6f6f;
        margin-top: 13px;
        font-size: 14px;
        appearance: none;
        width: 271px;
        height: 43px;
        border-radius: 6px;
        padding: 0 11px;
        border: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 10px;
        margin-bottom: 24px;
        cursor: pointer;
      }

      & > label {
        display: block;
        position: relative;
        color: #6f6f6f;
        padding-left: 30px;
        padding-top: 3px;
        margin-bottom: 12px;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;

        &:hover {
          span {
            background-color: #ccc;
          }
        }

        input {
          position: absolute;
          cursor: pointer;
          opacity: 0;
          height: 0;
          width: 0;

          &:checked ~ span {
            background-color: #f2ac05;
          }

          &:checked ~ span:after {
            display: block;
          }
        }

        span {
          position: absolute;
          top: 0;
          left: 0;
          height: 22px;
          width: 22px;
          border: 1px solid #e9e9e9;
          border-radius: 2px;

          &:after {
            content: '';
            position: absolute;
            display: none;
            left: 7px;
            top: 4px;
            width: 3px;
            height: 8px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        }
      }
    }

    div.button-container {
      display: flex;
      justify-content: center;
      margin: 38px 0 22px;

      button {
        width: 214px;
        height: 42px;
        border-radius: 8px;
        background: #f2ac05;
        color: #fff;
        transition: background 0.2s;

        &:hover {
          background: #d99a04;
        }
      }
    }
  }
`
