import styled from "styled-components";

export const CenterWraper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #DDDDDD;
  border-radius: 30px;
  background-color: #fff;
  ${props => props.theme.mixins.boxShadow}

  .search-input {
    width: 251px;
    margin-right: 8px;
  }
  .search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => props.theme.color.primaryColor};
    cursor: pointer;
  }
`