import { styled } from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    color: ${props => props.theme.color.primary};
    .logo {
        margin: 24px;
        cursor: pointer;
    }
`