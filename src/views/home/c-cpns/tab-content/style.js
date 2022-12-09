import styled from "styled-components";

export const TabContentWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 32px;
  white-space: nowrap;
  color: #000;
  background-color: #fff;

  .item {
    min-width: 250px;
    padding: 13px 32px;
    border-radius: 32px;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    .item-title {
      margin-bottom: 5px;
      font-size: 12px;
    }

    .item-desc {
      font-size: 14px;
      color: #666;
    }
  }

  .line {
    height: 50%;
    width: 1px;
    background-color: ${props => props.theme.color.borderColor};

    &:last-child {
      width: 0;
    }
  }
`
