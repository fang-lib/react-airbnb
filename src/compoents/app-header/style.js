import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: ${props => props.isFixed ? 'fixed' : 'static'};
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 26px;
  box-sizing: border-box;
  background-color: ${props => props.background ?? '#fff'};
  z-index: 99;

  .fade-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .fade-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .fade-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .fade-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }
`