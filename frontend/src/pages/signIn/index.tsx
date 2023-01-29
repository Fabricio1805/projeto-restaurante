import React from 'react';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import * as C from './style';
import logo from '../../assets/images/logo.svg';

const SignIn = () => {
  return (
    <C.Container>
      <img src={logo} alt="" />
      <C.Content>
        <form>
          <Input placeholder="Digite seu email" type="email" />
          <Input placeholder="Digite sua senha" type="password" />

          <Button type="submit" loading={false}>
            Entrar
          </Button>
          <C.A href="/signup">
            Não possui uma conta? Cadastre-se
          </C.A>
        </form>
      </C.Content>
    </C.Container>
  );
};

export default SignIn;
