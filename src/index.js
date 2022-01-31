import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Form from './components/Form';
import { AuthProvider } from './Providers/Auth';

ReactDOM.render(
  <React.StrictMode>

    <AuthProvider>
      <Form />
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
