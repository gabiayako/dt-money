import { Summary } from '../Summary';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Summary title="Entradas" amount={17400} />
    </Container>
  );
};
