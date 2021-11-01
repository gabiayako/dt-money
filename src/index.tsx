import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento website',
          amount: 6000,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date('2021-10-16 9:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1100,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-10-17 11:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const date = new Date();
      return schema.create('transaction', {
        ...data,
        createdAt: date.toISOString(),
      });
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
