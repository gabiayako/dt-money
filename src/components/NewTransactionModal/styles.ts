import styled from 'styled-components';

import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    height: 4rem;
    width: 100%;
    background: #e7e9ee;
    border: solid 1px #d7d7d7;
    border-radius: 0.25rem;
    padding: 0 1.25rem;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    background: var(--green);
    padding: 1.25rem;
    width: 100%;
    border: none;
    border-radius: 0.25rem;

    margin-top: 1.5rem;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: var(--shape);

    transition: filter 200ms;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface TransactionTypeButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#E52E4D',
};

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  padding: 1.25rem;
  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};
  color: var(--text-title);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px #969cb2;
  border-radius: 0.25rem;

  transition: border-color 200ms;

  &:hover {
    border-color: ${darken(0.1, '#969cb2')};
  }

  span {
    margin-left: 1rem;
  }
`;
