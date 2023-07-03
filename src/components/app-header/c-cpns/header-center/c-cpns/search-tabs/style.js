import { styled } from "styled-components";

export const TabsWrapper = styled.div`
    display: flex;
    > .item {
        margin-right: 30px;
        font-size: 16px;
        color: ${props=>props.theme.isAlpha ? '#fff':'#222'};
        padding-bottom: 10px;
        cursor: pointer;
    }
    .active {
        border-bottom: 2px solid #222;
        border-bottom-color: ${props=>props.theme.isAlpha ? '#fff':'#222'};
    }


`