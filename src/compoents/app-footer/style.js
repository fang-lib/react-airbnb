import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 48px 0px;
  margin-top: 100px;
  border-top: 1px solid ${props => props.theme.color.borderColor};

  .footer-content {
    display: flex;
    width: 1032px;
    margin: 0 auto;
    padding-bottom: 35px;
    border-bottom: 1px solid ${props => props.theme.color.borderColor};

    .list {
      flex: 1;
      font-size: 14px;
    }
    .item {
      margin-bottom: 8px;
      cursor: pointer;
      color: #767676;

      &:hover {
        text-decoration: underline;
        color: #767676;
      }
    }
    .title {
      margin-bottom: 8px;
      font-weight: 600;
      color: #333;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .statement {
    padding: 15px 0;
    text-align: center;
    color: #767676;
  }
`