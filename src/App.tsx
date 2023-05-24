import { createServer } from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyles } from "./styles/global";

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [{
                id: 1,
                title: 'Transaction 1',
                amount: 500,
                type: 'deposit',
                category: 'Food',
                createAt: new Date()
            }]
        })
    }
})

Modal.setAppElement('#root');

export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <GlobalStyles />
            <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
        </>
    );
}

