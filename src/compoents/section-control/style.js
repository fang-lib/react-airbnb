import styled from "styled-components";

export const ControlWrapper = styled.div`
  margin-bottom: 20px;
  
  ::-webkit-scrollbar { 
    display: none;
  }

  .item {
    flex-shrink: 0;
    padding: 14px 42px;
    margin-right: 16px;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 4px;
  }

  .active {
    color: #fff;
    background-color: ${props => props.theme.color.activeColor};
  }
`