import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    td{
        padding: 1.25rem 2rem;
        border: 0;
        background-color: var(--shape-secondary);
        font-weight: normal;

        &:first-child {
            border-top-left-radius: 0.35rem;
            border-bottom-left-radius:  0.35rem;
            width: 50%;
        }

        &:last-child {
            border-top-right-radius:  0.35rem;
            border-bottom-right-radius:  0.35rem;
        }

        &.widthdraw{
            color: var(--red)
        }

        &.deposit{
            color: var(--greenlight)
        }
    }

`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: left;
    color: var(--text-base);
`;