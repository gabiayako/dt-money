import { createContext, useState, useEffect, ReactNode } from 'react';
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
  createTransaction: (transaction: TransactionInput) => void;
  transactions: Transaction[];
};

type TransactionsContextProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsContextProvider = ({
  children,
}: TransactionsContextProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const createTransaction = (transaction: TransactionInput) => {
    api.post('/transactions', transaction);
  };

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
