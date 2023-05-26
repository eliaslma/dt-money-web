import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--shape-third);
    padding: 1.5rem 2rem;
    border-radius: 0.35rem;

    p{
        font-size: 1rem;
        color: var(--text-base);
    }

    strong{
        display: block;
        color: var(--title);
        font-size: 2rem;
        margin-top: 0.75rem;
        font-weight: bold;
    }

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;
