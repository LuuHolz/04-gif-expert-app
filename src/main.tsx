import React from 'react';
import ReactDOM from 'react-dom/client';
import  { GifExpertApp }  from './pages/GifExpertApp';
import './styles/GifExpertApp.style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
