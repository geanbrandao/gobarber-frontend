import React from 'react';

import SignIn from './pages/Signin/index';
// import SignUp from './pages/Signup';
import GlobalStyle from './styles/global';

// eh um component colocado em volta dos componentes que queremos que tenham acesso ao contexto da aplicacao
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
