import styled from 'styled-components'

export const Container = styled.div`
  height: 290px;
  width: 290px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 1px 8px #00000024;

  @media (max-width: 1117px) {
    height: 260px;
    width: 260px;
  }

  @media (max-width: 935px) {
    height: 230px;
    width: 230px;
  }

  @media (max-width: 754px) {
    height: calc(50vw - 20px);
    width: 100%;
  }

  @media (max-width: 518px) {
    height: calc(100vw - 60px);
    width: 100%;
  }

  div:first-child {
    position: relative;
    height: 57%;

    img {
      height: 100%;
      width: 100%;
      border-radius: 6px 6px 0 0;
    }

    strong {
      position: absolute;
      text-transform: capitalize;
      bottom: 10px;
      left: 14px;
      font-size: 26px;
      font-weight: 600;
      color: #fff;

      @media (max-width: 1117px) {
        font-size: 23px;
        bottom: 7px;
        left: 12px;
      }

      @media (max-width: 935px) {
        font-size: 22px;
        bottom: 6px;
        left: 10px;
      }

      @media (max-width: 815px) {
        font-size: 21px;
        bottom: 5px;
        left: 8px;
      }

      @media (max-width: 754px) {
        font-size: 28px;
        bottom: 4px;
      }

      @media (max-width: 566px) {
        font-size: 22px;
      }

      @media (max-width: 518px) {
        font-size: calc(100vw * 0.0025 * 30);
      }
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    padding: 14px;

    @media (max-width: 1117px) {
      padding: 12px;
    }

    @media (max-width: 935px) {
      padding: 10px;
    }

    @media (max-width: 815px) {
      padding: 8px;
    }

    @media (max-width: 754px) {
      padding: 10px;
    }

    @media (max-width: 518px) {
      padding: 14px;
    }

    span {
      color: #6f6f6f;
      margin-bottom: 5px;

      @media (max-width: 1117px) {
        margin-bottom: 4px;
      }

      @media (max-width: 935px) {
        margin-bottom: 3px;
      }

      @media (max-width: 815px) {
        margin-bottom: 2px;
      }
    }

    span.breed {
      text-transform: capitalize;
      font-size: 18px;

      @media (max-width: 1117px) {
        font-size: 17px;
      }

      @media (max-width: 935px) {
        font-size: 16px;
      }

      @media (max-width: 815px) {
        font-size: 15px;
      }

      @media (max-width: 754px) {
        font-size: 20px;
      }

      @media (max-width: 566px) {
        font-size: 18px;
      }

      @media (max-width: 518px) {
        font-size: calc(100vw * 0.0025 * 20);
      }
    }

    span.age {
      font-size: 16px;
      font-weight: 600;

      @media (max-width: 1117px) {
        font-size: 15px;
      }

      @media (max-width: 935px) {
        font-size: 14px;
      }

      @media (max-width: 815px) {
        font-size: 13px;
      }

      @media (max-width: 754px) {
        font-size: 18px;
      }

      @media (max-width: 566px) {
        font-size: 16px;
      }

      @media (max-width: 518px) {
        font-size: calc(100vw * 0.0025 * 18);
      }
    }

    span.dewormed,
    .neutered {
      font-size: 16px;
      font-weight: 500;

      @media (max-width: 1117px) {
        font-size: 15px;
      }

      @media (max-width: 935px) {
        font-size: 14px;
      }

      @media (max-width: 815px) {
        font-size: 13px;
      }

      @media (max-width: 754px) {
        font-size: 18px;
      }

      @media (max-width: 566px) {
        font-size: 16px;
      }

      @media (max-width: 518px) {
        font-size: calc(100vw * 0.0025 * 18);
      }
    }
  }
`
