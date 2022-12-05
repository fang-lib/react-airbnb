import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;

  .text {
    font-weight: 600;
    color: ${props => props.isOtherColor ? props.theme.color.activeColor : '#000'};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .icon {
    margin-left: 8px;
    font-size: 12px;
  }
`