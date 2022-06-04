import React from 'react';
import ReactDOM from 'react-dom/client';
//import {ThemeProvider, createTheme} from '@mui/material'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// кастомизация темы 
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#61dafb'
//     },
//     secondary:{
//       main: '#00ff00'
//     }
//   }
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
    </ThemeProvider> */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
