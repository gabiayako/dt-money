import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import { Amount, Container, Header, Title } from './styles';

export const Summary = ({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) => {
  return (
    <Container>
      <div>
        <Header>
          <Title>Entradas</Title>
          <img src={Income} alt="Entradas" />
        </Header>
        <Amount>{`R$${amount}`}</Amount>
      </div>

      <div>
        <Header>
          <Title>Saídas</Title>
          <img src={Outcome} alt="Saídas" />
        </Header>
        <Amount>{`R$${amount}`}</Amount>
      </div>
      <div className={'highlight-background'}>
        <Header>
          <Title>Total</Title>
          <img src={Total} alt="Total" />
        </Header>
        <Amount>{`R$${amount}`}</Amount>
      </div>
    </Container>
  );
};
