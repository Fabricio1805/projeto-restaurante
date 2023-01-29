import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #101026;
`;

export const A = styled.a`
  margin-top: 15px;
  color: #FFF;
  text-decoration: none;
  font-weight: bold;
`;

export const Content = styled.div`
  margin-top: 2rem;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  form {
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  form button {
    height: 40px;
    font-size: 1.2rem;
  }
`;
