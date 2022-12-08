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
  background-color: #fff;
  z-index: 99;
`