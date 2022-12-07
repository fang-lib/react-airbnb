import styled from "styled-components";

export const DetailWrapper = styled.div`
  .img-list_box {
    display: flex;
    padding-top: 80px;

    > * {
      flex: 1;
      height: 600px;
    }

    .right-box {
      display: flex;
      flex-wrap: wrap;

      .img-box {
        width: 50%;
        height: 50%;
        border: 1px solid #000;
        box-sizing: border-box;
      }
    }

    .img-box {
      position: relative;
      overflow: hidden;

      .img-cover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(00, 00, 00, 0.2);
        opacity: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      .img-cover {
        opacity: 1;
      }

      .img-box{
        &:hover {

          img {
            transform: scale(110%);
          }

          .img-cover {
            opacity: 0;
          }
        }
      }
    }
  }

  
`