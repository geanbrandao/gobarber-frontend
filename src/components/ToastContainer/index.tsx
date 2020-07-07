import React from 'react';

import { useTransition } from 'react-spring';

import Toast from './Toast'; // quando tem index e style importa só a pasta

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContextProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContextProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 }, // fica o tamanho do elemento, mais 20 % dele pra fora da tela a direita
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
