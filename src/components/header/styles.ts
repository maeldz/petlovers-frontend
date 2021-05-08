import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #f2ac05;
  height: 73px;
  padding: 0 40px 0 60px;
  align-items: center;
  justify-content: space-between;

  aside {
    display: flex;
    flex-direction: row;

    a {
      font-size: 21px;
      color: #fff;

      &:first-child {
        margin-right: 35px;
      }
    }
  }
`
