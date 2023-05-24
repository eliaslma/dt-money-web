import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import { useState } from 'react';
import Modal from 'react-modal';
import closeImage from '../../assets/close.svg';
import { Container, TransactionTypeContainer, TypeTransactionButton } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState<string>();

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
            <Container>
                <h1>Nova transação</h1>
                <input type="text" placeholder='Descrição' />
                <input type="number" placeholder='Preço' />
                <input type="text" placeholder='Categoria' />
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