import styled from 'styled-components';

interface TypeTransactionButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#015F43',
    red: '#AA2834',
}

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.5rem;
        color: var(--white);
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        border-radius: 0.35rem;
        background-color: var(--header);
        border: 0;
        font-weight: 400;
        font-size: 1rem;
        color: var(--placeholder);

        &:focus{
            outline: none;
            border: 1px solid var(--greenlight);
            color: var(--text-base);
        }

        &::placeholder{
            color: var(--placeholder)
        }

        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background-color: var(--green);
        color: var(--white);
        border-radius: 0.35rem;
        border: 0;
        font-weight: bold;
        margin-top: 0.5rem;
        font-size: 1rem;
        transition: 0.2s;
        &:hover{
            background-color: var(--greenlight);
        }
    }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

export const TypeTransactionButton = styled.button<TypeTransactionButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    border-radius: 0.35rem;
    border: 0;
    background-color: ${(props) =>  props.isActive ? colors[props.activeColor] : '#29292E'};
    transition: 0.2s;

    span{
        display: inline-block;
        margin-left: 0.65rem;
        color: ${(props) => props.isActive ? '#FFFFFF' : '#C4C4CC'};
        font-size: 1rem;
    }

`;
