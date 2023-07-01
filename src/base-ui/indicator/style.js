import { styled } from "styled-components";

export const IndicatorWrapper = styled.div`
    overflow: hidden;

    
    .i-content {
        position: relative;
        display: flex;
        transition: transform 0.2s ease;

        > * {
        flex-shrink: 0;
    }
    }
`