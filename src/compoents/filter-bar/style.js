import styled from "styled-components";

export const FilterWrapper = styled.div`
  .content {
    position: fixed;
    top: 80px;
    display: flex;
    align-items: center;
    width: 100vw;
    padding: 10px 30px;
    border-top: 1px solid ${props => props.theme.color.borderColor};
    border-bottom: 1px solid ${props => props.theme.color.borderColor};
    background-color: #fff;
    z-index: 99;

    .filter-item {
      padding: 10px 18px;
      margin-right: 16px;
      border-radius: 8px;
      border: 1px solid ${props => props.theme.color.borderColor};
      font-size: 14px;
    }
    .active {
      background-color: ${props => props.theme.color.activeColor};
      color: #fff;
    }
  }
  

  .occupy {
    height: ${props => props.fixedHeight + 80}px;
  }
`