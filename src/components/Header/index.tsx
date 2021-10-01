import Logo from '../../assets/logo.svg';
import { Button, Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <Button type="button">Nova transação</Button>
      </Content>
    </Container>
  );
}
