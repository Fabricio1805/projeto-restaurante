import styled from 'styled-components';


export const Button = styled.button`
  max-width: 600px;
  background-color: #3fffa3;
  border: none;
  padding: 0.4rem;
  color: #101026;
  border-radius: 5rem;
  transition: filter 0.2s;

  font-weight: bold;

  &[disabled] {
    cursor: not-allowed;

    svg {
      animation: animate 2s infinite;
    }
  }

  &:hover {
    filter: brightness(1.08);
  }
`;
