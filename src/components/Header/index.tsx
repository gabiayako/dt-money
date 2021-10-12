import Logo from '../../assets/logo.svg';
import { Button, Container, Content } from './styles';

type HeaderProps = {
  onCreateNewTransaction: () => void;
};

export function Header({ onCreateNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <Button onClick={onCreateNewTransaction} type="button">
          Nova transação
        </Button>
      </Content>
    </Container>
  );
}
