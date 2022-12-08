import styled from "styled-components";

export const LeftWraper = styled.div`
  flex: 1;
  color: ${props => props.background ? '#fff' : props.theme.color.primaryColor};
  cursor: pointer;
`