
import {
    Container
} from './styles';

import { HighlightCard } from '../HighlightCard';

export function Summary(){
    return(
        <Container>
            <HighlightCard type='up' title="Entradas"/>
            <HighlightCard type='down' title="Saídas"/>
            <HighlightCard type='total' title="Total"/>
        </Container>
    );
}