import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImage from '../../assets/close.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, TypeTransactionButton } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState<number>()
    const [category, setCategory] = useState('')
    const [type, setType] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            description,
            value,
            category,
            type
        };

        api.post('/transactions',data).then(response => {console.log(response.data)})
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button
                type="button" onClick={onRequestClose}
                className='react-modal-close'>
                <img src={closeImage} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h1>Nova transação</h1>
                <input
                    type="text"
                    placeholder='Descrição'
                    value={description}
                    onChange={event => setDescription(event.target.value)} />
                <input
                    type="number"
                    placeholder='Preço'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))} />
                <input
                    type="text" placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)} />
                <TransactionTypeContainer>
                    <TypeTransactionButton
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor='green'
                        onClick={() => setType("deposit")}>
                        <ArrowCircleUp
                            size={24}
                            fill={type === 'deposit' ? "#FFFFFF" : "#00B37E"}
                        />
                        <span>Entrada</span>
                    </TypeTransactionButton>
                    <TypeTransactionButton
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor='red'
                        onClick={() => setType("withdraw")}>
                        <ArrowCircleDown
                            size={24}
                            fill={type === 'withdraw' ? "#FFFFFF" : "#f75a68"}
                        />
                        <span>Saída</span>
                    </TypeTransactionButton>
                </TransactionTypeContainer>

                <button type='submit'>Cadastrar</button>

            </Container>
        </Modal>
    );
}