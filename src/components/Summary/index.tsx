import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { formatCurrency } from '../../services/numbers';
import { Amount, Container, Header, Title } from './styles';

export const Summary = () => {
  const { transactions } = useTransactions();

  const summaryData = transactions.reduce(
    (summaryData, transaction) => {
      if (transaction.type === 'deposit') {
        summaryData['deposit'] += transaction.amount;
        summaryData['total'] += transaction.amount;
      } else if (transaction.type === 'withdraw') {
        summaryData['withdraw'] += transaction.amount;
        summaryData['total'] -= transaction.amount;
      }
      return summaryData;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <Header>
          <Title>Entradas</Title>
          <img src={Income} alt="Entradas" />
        </Header>
        <Amount>{formatCurrency(summaryData.deposit)}</Amount>
      </div>

      <div>
        <Header>
          <Title>Saídas</Title>
          <img src={Outcome} alt="Saídas" />
        </Header>
        <Amount>{`-${formatCurrency(summaryData.withdraw)}`}</Amount>
      </div>
      <div className={'highlight-background'}>
        <Header>
          <Title>Total</Title>
          <img src={Total} alt="Total" />
        </Header>
        <Amount>{formatCurrency(summaryData.total)}</Amount>
      </div>
    </Container>
  );
};
