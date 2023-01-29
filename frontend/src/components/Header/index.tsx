import React from 'react';
import { IoMdExit } from 'react-icons/io';
import logo from '../../assets/images/logo.svg';
import * as C from './style';

const Header = () => {
  return (
    <C.Container>
      <C.Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
        <C.Button>
          <IoMdExit size={25} color="#FFF" />
        </C.Button>
      </C.Content>
    </C.Container>
  );
};

export default Header;
