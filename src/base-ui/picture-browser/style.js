import { styled } from "styled-components";

export const BrowserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #333;

    .top {
        position: relative;
        height: 86px;
        .close-btn {
            z-index: 999;
            position: absolute;
            right: 25px;
            top: 15px;
            cursor: pointer;
        }
    }
    .slider {
        position: relative;
        display: flex;
        justify-content: center;
        flex:1;

        .control{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 83px;
                cursor: pointer;
            }
        }
        .picture {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            max-width: 105vh;

            .pic-enter {
                transform: translateX(${props=>JSON.parse(props.next) ? '100%' : '-100%'});
                opacity: 0;
            }
            .pic-enter-active {
                transform: translateX(0);
                opacity: 1;
                transition: all 0.2s ease;
            }
            .pic-exit {
                opacity: 1;
            }
            .pic-exit-active {
                opacity: 0;
                transition: all 0.2 ease;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                height: 100%;
                user-select: none;
            }
        }
    }
    .preview {
        display: flex;
        justify-content: center;
        height: 100px;
        margin-top: 10px;
        .info {
            position: absolute;
            bottom: 10px;
            max-width: 105vh;
            color: #fff;

            .desc {
                display: flex;
                justify-content: space-between;

                .toggle {
                    cursor: pointer;
                }
            }
            
            .list {
                margin-top: 3px;
                overflow: hidden;
                transition: height 0.3s ease;
                height: ${props=>JSON.parse(props.showlist) ? '67px':'0'};
                .item {
                    margin-right: 15px;
                    cursor: pointer;

                    img {
                        height: 67px;
                        opacity: 0.5;
                    }
                    &.active {
                        img{
                            opacity: 1;
                        }
                    }
                }
            }
        }

    }
`