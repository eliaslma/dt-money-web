import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImage from '../../assets/close.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, TypeTransactionButton } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const {createTransaction} = useTransactions();

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<number>();
    const [category, setCategory] = useState('')
    const [type, setType] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({ description, amount: Number(amount), type, category }).then(resetForm)
    }

    function resetForm(){
        setDescription('');
        setAmount(0);
        setCategory('');
        setType('');
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
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))} />
                <input
                    type="text" placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)} />
                <TransactionTypeContainer>
                    <TypeTransactionButton
                        type="button"
                        isactive={type === 'deposit'}
                        activecolor='green'
                        onClick={() => setType("deposit")}>
                        <ArrowCircleUp
                            size={24}
                            fill={type === 'deposit' ? "#FFFFFF" : "#00B37E"}
                        />
                        <span>Entrada</span>
                    </TypeTransactionButton>
                    <TypeTransactionButton
                        type="button"
                        isactive={type === 'withdraw'}
                        activecolor='red'
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