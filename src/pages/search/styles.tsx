import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  padding: 84px 63px;

  @media (max-width: 1117px) {
    padding: 54px 40px;
  }

  @media (max-width: 935px) {
    padding: 44px 30px;
  }

  @media (max-width: 815px) {
    padding: 34px 20px;
  }

  @media (max-width: 754px) {
    padding: 20px 20px;
    display: block;
  }

  @media (max-width: 518px) {
    padding: 30px 30px;
  }

  section {
    display: flex;
    flex: 1;

    div.grid {
      display: grid;
      flex: 1;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      grid-gap: 63px;

      @media (max-width: 1117px) {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-gap: 40px;
      }

      @media (max-width: 935px) {
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        grid-gap: 30px;
      }

      @media (max-width: 815px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
      }

      @media (max-width: 754px) {
        grid-template-columns: repeat(auto-fit, minmax(calc(50vw - 40px), 1fr));
      }

      @media (max-width: 518px) {
        grid-gap: 30px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 358px;
    width: 285px;
    padding: 35px;
    margin-right: 63px;
    background: #fff;
    box-shadow: 0px 1px 8px #00000024;

    @media (max-width: 1117px) {
      margin-right: 40px;
      padding: 30px;
      height: 328px;
      width: 255px;
    }

    @media (max-width: 935px) {
      margin-right: 30px;
      padding: 25px;
      height: 308px;
      width: 235px;
    }

    @media (max-width: 815px) {
      margin-right: 20px;
      padding: 20px;
      height: 288px;
      width: 215px;
    }

    @media (max-width: 754px) {
      margin-right: 0px;
      margin: 0 0 20px 0;
      height: 100%;
      width: 100%;
    }

    @media (max-width: 518px) {
      margin: 0 0 30px 0;
    }

    & > div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 18px;
        color: #6f6f6f;
        margin-bottom: 12px;
        font-weight: 400;
      }

      select {
        background: #e9e9e9;
        color: #6f6f6f;
        font-size: 14px;
        appearance: none;
        height: 33px;
        border-radius: 6px;
        padding: 0 11px;
        border: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 5px;
        margin-bottom: 24px;
        cursor: pointer;
      }

      label {
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

    button {
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
`
