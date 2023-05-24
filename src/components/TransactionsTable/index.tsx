
import { useEffect } from 'react';
import { api } from '../../services/api';
import {
    Container,
    Table
} from './styles';

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data))
    },[])

    return(
        <Container>
            <Table>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className='widthdraw'>- R$ 12.000</td>
                        <td>Casa</td>
                        <td>12/04/2022</td>
                    </tr>
                </tbody>
            </Table>
            <Table>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposit'>R$ 12.000</td>
                        <td>Venda</td>
                        <td>12/04/2022</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}