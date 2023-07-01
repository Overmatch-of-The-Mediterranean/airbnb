import { styled } from "styled-components";

export const ItemWrapper = styled.div`
    flex-shrink: 0;
    width: ${props => props.itemwidth};
    padding: 8px;
    box-sizing: border-box;

    .inner {
        width: 100%;
        .slider {
            position: relative;
            cursor: pointer;
            &:hover {
                .control {
                    display: flex;
                }
            }
            .control {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 1;
                display: none;
                justify-content: space-between;
                color: #fff;

                .btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 83px;
                    height: 100%;
                    background: linear-gradient(to left,transparent 0%, rgba(0,0,0,.25) 100%);

                    &.right {
                    background: linear-gradient(to right,transparent 0%, rgba(0,0,0,.25) 100%);
                }
                }
                
            }
            .indicator {
                position: absolute;
                z-index: 99;
                left: 0;
                right: 0;
                bottom: 10px;
                margin: 0 auto;
                width: 30%;

                .item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 14.28%;
                    .dot {
                        background-color: #fff;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        &.active {
                            width: 8px;
                            height: 8px;
                            background-color: red;
                        }
                    }
                    .selectIndex_1 {
                        width: 6px;
                        height: 6px;
                    }
                    .selectIndex_2 {
                        width: 5px;
                        height: 5px;
                    }
                    .selectIndex_3 {
                        width: 4px;
                        height: 4px;
                    }
                    .selectIndexAdd1 {
                        width: 6px;
                        height: 6px;
                    }
                    .selectIndexAdd2 {
                        width: 5px;
                        height: 5px;
                    }
                    .selectIndexAdd3 {
                        width: 4px;
                        height: 4px;
                    }
                }
            }
            
        }
    }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifycolor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    margin: 8px 0;
  }

  .price {
    margin: 8px 0;
  }
  
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`