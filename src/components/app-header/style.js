import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
    
    z-index: 99999;
    

    .content {
        position: relative;
        z-index: 99;
        transition: all 0.25s ease;
        background-color: ${props=>props.theme.isAlpha ? 'rgba(255,255,255,0)':'#fff'};
        border-bottom: 1px solid ${props=>props.theme.isAlpha ? 'rgba(255,255,255,0)':'#eee'};
        .top {
            display: flex;
            align-items: center;
            height: 80px;
        }
        .search-area {
            height: 100px;
        }
    }

    .cover {
        position: fixed;
        z-index: 9;
        right: 0;
        left: 0;
        top: 0px;
        bottom: 0;
        transition: all 0.25s ease;
        background-color: rgba(0,0,0,.3);
    }

    &.fixed {
        position:fixed ;
        top: 0;
        left: 0;
        right: 0;
    }

`
export const SearchAreaWrapper = styled.div`
    transition: height .25s ease;
    height: ${props=>props.isSearch ? '100px':'0'};
`