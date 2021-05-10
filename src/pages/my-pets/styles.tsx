import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 138px 70px 138px;

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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 63px;
    }
  }
`
