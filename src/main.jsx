import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faKickstarter } from '@fortawesome/free-brands-svg-icons';

createRoot(document.getElementById('root'))
.render( 
<StrictMode> 
  <App />
 </StrictMode>
)

