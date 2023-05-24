
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import {
    Container,
    Table
} from './styles';

interface TransactionProps {
    id: number;
    description: string,
    amount: number,
    type: string,
    createdAt: string,
    category: string,
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <Table>
                <tbody>
                    {
                        transactions && transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.description}</td>
                                <td className={transaction.type}>
                                    {transaction.type == 'withdraw' && '-'} 
                                    {new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(transaction.amount) }
                                </td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format( new Date(transaction.createdAt) )}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </Container>
    );
}