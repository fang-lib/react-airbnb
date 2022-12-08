import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;
  }
  .btn {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.color.borderColor};
    background-color: #fff;
    z-index: 9;
  }
  .rightBtn {
    right: -14px;
  }
  .leftBtn {
    left: -14px;
  }
  .content {
    display: flex;
    align-items: center;
    margin-right: -16px;
  }
`