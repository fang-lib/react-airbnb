import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
  background-color: #222;
  z-index: 99;

  .cancel-box {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    box-sizing: border-box;
    width: 100%;
    padding:  15px;
    font-size: 45px;
    color: #fff;
    cursor: pointer;
  }

  .carousel {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    width: 913px;

    &-img {
      max-height: 100%;
    }
  }

  .operation {
    position: absolute;
    bottom: 0;
    top: 0;
    height: 60px;
    margin: auto 20px;
    font-size: 60px;
    color: #fff;
    cursor: pointer;
  }

  .operation-left {
    left: 00px;
  }
  .operation-right {
    right: 00px;
  }

  .indictor-box {
    height: 93px;
    overflow: hidden;
    transform: ${props => props.hiddenList ? 'translateY(60px)' : 'translateY(0px)'};
    transition: transform 500ms ease;

    .indictor-limit {
      max-width: 913px;
      height: ${props => props.hiddenList ? '20px' : '96px'};
      overflow: hidden;
      transition: height 500ms ease;
    }
    .indictor-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      color: #fff;

      .header-text {
        cursor: pointer;
      }
    }
    .indictor-img_box {
      position: relative;
      cursor: pointer;

      .indictor-img {
        width: 100px;
        height: 67px;
        margin-right: 15px;
      }

      .indictor-cover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(00, 00, 00, 0.4);
      }
    }

    .indictor-img_active {
      .indictor-cover {
        opacity: 0;
      }
    }
  }
`