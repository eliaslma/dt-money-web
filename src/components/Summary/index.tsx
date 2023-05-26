import { useTransactions } from '../../hooks/useTransactions';

import {
    Container
} from './styles';

import { HighlightCard } from '../HighlightCard';

export function Summary() {

    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <HighlightCard type='up' title="Entradas" amount={summary.deposits} />
            <HighlightCard type='down' title="Saídas" amount={summary.withdraws} />
            <HighlightCard type='total' title="Total" amount={summary.total} />
        </Container>
    );
}