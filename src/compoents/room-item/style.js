import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${props => `${props.itemWidth}%`};
  padding-right: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;

  .item-img {
    width: 100%;
    height: ${props => `${656 * props.itemWidth * 0.95 / 100}px`};
    object-fit: cover;
  }

  .item-type {
    margin: 10px 0 5px;
    font-size: 12px;
    color: ${props => props.typeTextColor};
  }

  .item-desc {
    font-size: 16px;
    font-weight: 600;
  }

  .item-price {
    margin: 8px 0 3px;
    font-size: 14px;
  }

  .item-star {
    font-size: 12px;
    font-weight: 600;

    &_rate {
      font-size: 8px;
      color: ${props => props.rateColor};

      .ant-rate-star {
        margin-right: 3px;
      }
    }
  }
`