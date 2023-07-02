import { styled } from "styled-components";

export const FilterWrapper = styled.div`
    /* position: fixed;
    z-index: 99;
    left: 0;
    right: 0; */

    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 16px;
    border-bottom: 1px solid #f2f2f2;

    .filter {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        z-index: 9999;
        display: flex;
        background-color: #fff;
        padding: 10px 0;
        border-top: 1px solid #dce0c0;
        border-bottom: 1px solid #dce0c0;
        .item {
            margin: 0 4px 0 8px;
            padding: 6px 12px;
            border: 1px solid #dce0c0;
            border-radius: 4px;
            color: #484848;
            cursor: pointer;

            &.active{
                background: #008489;
                border: 1px solid #008489;
                color: #fff;
            }
        }
    }
`