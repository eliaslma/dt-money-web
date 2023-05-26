import { useTransactions } from '../../hooks/useTransactions';

import {
    Container,
    Table
} from './styles';

export function TransactionsTable() {

    const {transactions} = useTransactions();

    return (
        <Container>
            <Table>
                <tbody>
                    {
                        transactions && transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.description}</td>
                                <td className={transaction.type}>
                                    {transaction.type === 'withdraw' && '-'} 
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