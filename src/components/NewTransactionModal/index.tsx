import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../context/TransactionsContext';
import { api } from '../../services/api';
import {
  Container,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

Modal.setAppElement('#root');

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [category, setCategory] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      type,
      category,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={onRequestClose}
        type="button"
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onClick={handleSubmit}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => {
            setAmount(Number(event.target.value));
          }}
        />
        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeButton>
          <TransactionTypeButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
