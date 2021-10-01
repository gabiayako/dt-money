import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--blue-light);
  color: var(--shape);
  size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
