import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
// eh um component colocado em volta dos componentes que queremos que tenham acesso ao contexto da aplicacao
import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
