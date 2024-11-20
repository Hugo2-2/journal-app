import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles.css';
import { JournalApp } from './JournalApp';
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
