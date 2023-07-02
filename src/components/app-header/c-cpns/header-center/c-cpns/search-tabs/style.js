import { styled } from "styled-components";

export const TabsWrapper = styled.div`
    display: flex;
    > .item {
        margin-right: 30px;
        font-size: 16px;
        color: #222;
        padding-bottom: 10px;
        cursor: pointer;
    }
    .active {
        border-bottom: 2px solid #222;
    }


`