import styled from 'styled-components';
import defineConfig from '../../../vite.config';

export const Orverlay = styled.div`
  position:fixed;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background-color: rgba(0,0,0, .8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      background-color: transparent;
      border: none;
    }
  }

  .status-container{
    margin-top: 32px;

    small{
      font-size: .875rem;
      opacity: .8;
    }

    span{
      display: flex
    }

    div{
      display: flex;
      align-items: center;
      gap: 8px;

      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }
      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;


export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
  .primary {
    background-color: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 32px;
  }

  .secondary {
    padding: 14px 24px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #d73035;

    border: 0;
    border-radius: 48px;
    margin-top: 8px;

    strong {
      margin-left: 5px;
    }
  }

  .secondary:hover {
    opacity: 0.6;
  }
`;
