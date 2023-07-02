import { styled } from "styled-components";

export const SectionsWrapper = styled.div`
    
    display: flex;
    width: 850px;
    height: 66px;
    justify-content: space-between;
    border-radius: 32px;
    border: 1px solid #717171;
    
    .item {
        flex: 1;
        padding: 0 32px;
        margin: 14px 0;
        border-right: 1px solid #717171;
        .info {
            .title {
                color: #222;
                font-size: 12px;
                font-weight: 700;
            }
            .desc {
                color: #717171;
                font-size: 14px;
            }
        }
    }
    .item:last-child {
        border-right: none;
    }
`