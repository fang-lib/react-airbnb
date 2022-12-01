import styled from "styled-components";

export const RightWraper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  .btn {
    padding: 8px;
    margin: 0 10px;
    border-radius: 18px;

    &:hover {
      background-color: #eee;
    }
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    border: 1px solid #DDDDDD;
    margin: 10px;
    border-radius: 30px;
    padding: 4px 8px;
    color: #777;

    ${props => props.theme.mixins.boxShadow}
  }
  .panel {
    position: absolute;
    top: 60px;
    width: 200px;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,.18);
    font-weight: normal;
    background-color: #fff;

    .line {
      width: 100%;
      height: 2px;
      background-color: #eee;
    }
    .item {
      padding: 15px;

      &:hover {
        background-color: #eee;
      }
    }
  }
`