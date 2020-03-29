import React from 'react';

// arquivo css global
import './global.css';

//componentes de outros arquivos 
// ele procura sempre o index da pasta
import Routes from './routes'

// jsx
export default function App() {
  return (
    <Routes />
  );
}
