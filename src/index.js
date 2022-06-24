import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AuthProvider from './providers/AuthProvider';
import GoogleProvider from './providers/GoogleProvider';
import store from './redux/store';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <GoogleProvider>
          <Root />
        </GoogleProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
