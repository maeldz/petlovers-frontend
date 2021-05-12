import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 138px;

  @media (max-width: 919px) {
    padding: 50px 90px;
  }

  @media (max-width: 823px) {
    padding: 20px 50px;
  }

  @media (max-width: 518px) {
    padding: 20px 30px;
  }

  & > strong {
    color: #6f6f6f;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 47px;
  }

  section {
    display: flex;
    flex: 1;

    div.grid {
      display: grid;
      flex: 1;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      grid-gap: 63px;

      @media (max-width: 754px) {
        grid-template-columns: repeat(auto-fit, minmax(calc(50vw - 40px), 1fr));
      }

      @media (max-width: 518px) {
        grid-gap: 30px;
      }
    }
  }
`
