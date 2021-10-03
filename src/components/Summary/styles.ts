import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10px;
  div {
    background-color: var(--shape);
    border-radius: 0.3rem;
    padding: 1.625rem 2rem;
    color: var(--text-title);
  }

  & .highlight-background {
    background-color: var(--green);
    color: var(--shape);
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

export const Amount = styled.strong`
  font-size: 2.25rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  line-height: 3rem;
`;
