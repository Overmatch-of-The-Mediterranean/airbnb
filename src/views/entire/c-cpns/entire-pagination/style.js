import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .desc {
            margin-top: 16px;
        }
        
        .MuiPaginationItem-page {
            margin: 0 9px;

            &:hover {
                text-decoration: underline;
            }
        }

        .MuiPaginationItem-page.Mui-selected {
            background: #222;
            color: #fff;
        }
        .MuiPaginationItem-icon {
            font-size: 22px;
        }
    }
`