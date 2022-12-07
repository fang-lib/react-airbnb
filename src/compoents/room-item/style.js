import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => `${props.itemWidth}%`};
  padding-right: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;

  .item-img {
    width: 100%;
    height: ${props => props.itemWidth === '20' ? '230px' : `${656 * props.itemWidth * 0.95 / 100}px`};
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

  .slider-box {
    position: relative;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position:absolute;
      height: ${props => props.itemWidth === '20' ? '230px' : `${656 * props.itemWidth * 0.95 / 100}px`};
      width: 50px;
      font-size: 18px;
      color: #fff;
      z-index: 9;
    }

    .left-btn {
      left: 0;
      background-image: linear-gradient(270deg, rgba(00,00,00,0), rgba(00,00,00, 0.4));
    }
    .right-btn {
      right: 0;
      background-image: linear-gradient(90deg, rgba(00,00,00,0), rgba(00,00,00, 0.4));
    }

    .indictor {
      position: absolute;
      bottom: 15px;
      right: 0;
      left: 0;
      margin: 0 auto;
      max-width: 96px;
      text-align: center;
      overflow: hidden;

      .item-dot {
        width: 7px;
        height: 7px;
        margin-right: 4px;
        border-radius: 50%;
        background-color: #fff;
      }
      .item_active {
        width: 10px;
        height: 10px;
      }
    }
  }
`