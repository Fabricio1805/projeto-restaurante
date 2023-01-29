import styled from 'styled-components';

export const Container = styled.header`
  background-color: #d73035;

  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      opacity: .9;
      margin-top: .3rem;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;
