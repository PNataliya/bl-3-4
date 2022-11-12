import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
