import LogoImg from "../../assets/Logo.svg";

import { Button, Container, Content } from "./styles";

export function Header(){
    return(
        <Container>
            <Content>
            <img src={LogoImg} alt="dt money"/>
            <Button>Nova transação</Button>
            </Content>
        </Container>
    );
}