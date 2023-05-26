import LogoImg from "../../assets/Logo.svg";
import { Button, Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps ) {

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money" />
                <Button onClick={onOpenNewTransactionModal}>Nova transação</Button>
            </Content>
        </Container>
    );
}