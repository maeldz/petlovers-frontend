import styled from 'styled-components'

type Props = {
  expanded: boolean
}

export const Container = styled.div`
  div.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`

export const MenuContainer = styled.div<Props>`
  width: 350px;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: ${(props) => (props.expanded ? 0 : -350)}px;
  transition: left 0.5s ease;
  background: #f2ac05;
  padding: 38px 48px;
  z-index: 3;

  nav {
    ul {
      li {
        margin-bottom: 23px;

        a {
          font-size: 23px;
          font-weight: 400;
          color: #fff;
        }
      }
    }
  }
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 146px;
    height: 146px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 73px;
    background: #fff;

    img {
      width: 138px;
      height: 138px;
      border-radius: 69px;
    }
  }

  strong {
    color: #fff;
    font-size: 23px;
    animation: width 0.2s;
    font-weight: 800;
    margin: 21px 0 74px;
    text-align: center;
  }
`
