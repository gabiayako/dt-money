import styled from 'styled-components';

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

  button {
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
