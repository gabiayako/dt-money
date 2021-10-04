import { Container } from './styles';

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Hambúrguer</td>
            <td className="withdraw">-R$59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1200,00</td>
            <td>Casa</td>
            <td>23/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
