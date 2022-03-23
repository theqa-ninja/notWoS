import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'tailwindcss/tailwind.css';
import './main.css';

import App from 'components/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
