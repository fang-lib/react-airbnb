import styled from "styled-components";

export const HeaderTabsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-right: -16px;
  color: #fff;

  .tab-item {
    padding-bottom: 10px;
    margin-right: 16px;
    cursor: pointer;
  }

  .tab-item_active {
    border-bottom: 2px solid #fff;
  }

  .tabContent {
    position: absolute;
    top: 50px;
    display: flex;
    justify-content: center;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
  }
`