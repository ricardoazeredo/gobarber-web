import React from 'react';

import SignIn from './pages/Signin';
import Signup from './pages/Signup';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer/index';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
