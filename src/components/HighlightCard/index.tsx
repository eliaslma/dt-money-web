
import {
    Container,
    Header,
} from './styles';

import DollarSign from '../../assets/dollar.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImge from '../../assets/outcome.svg';

interface Props {
    type: 'up' | 'down' | 'total',
    title: string,
    amount: number,
}

const icon = {
    up: IncomeImg,
    down: OutcomeImge,
    total: DollarSign,
}

export function HighlightCard({ type, title, amount }: Props) {
    return (
        <Container>
            <Header>
                <p>{title}</p>
                <img src={icon[type]} alt={title} />
            </Header>
            <strong>{Intl.NumberFormat('pt-BR',{ style: 'currency',currency: 'BRL'}).format(amount)}</strong>
        </Container>
    );
}