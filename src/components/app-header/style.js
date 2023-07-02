import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
    
    border-bottom: 1px solid #eee;
    z-index: 9999;
    background-color: #fff;

    .content {
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
        right: 0;
        left: 0;
        top: 180px;
        bottom: 0;
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