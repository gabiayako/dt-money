import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsContextData = {
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  transactions: Transaction[];
};

type TransactionsContextProviderProps = {
  children: ReactNode;
};

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsContextProvider = ({
  children,
}: TransactionsContextProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>('transactions')
      .then((response) => {
        setTransactions(response.data.transactions);
      });
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post<
      TransactionInput,
      { data: { transaction: Transaction } }
    >('/transactions', transactionInput);
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};
