import styled from 'styled-components';

export const Container = styled.header`
   background-color: var(--header);
`;

export const Content = styled.div`
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 8rem;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    font-size: 1rem;
    color: var(--white);
    background-color: var(--green);
    border-radius: 0.35rem;
    padding: 0 2rem;
    height: 3rem;
    border: none;
    font-weight: bold;

    transition: 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
`;