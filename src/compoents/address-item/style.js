import styled from "styled-components";

export const AddressItemWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 193px;
  height: 238px;
  margin-right: 16px;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cover {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 143px;
    text-align: center;
    font-size: 18px;
    background-image: linear-gradient(180deg, rgba(00,00,00,0), rgba(00,00,00,.8));
    color: #fff;

    .address-text {
      margin-top: 60px;
      font-weight: 600;
    }
    .address-price {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`