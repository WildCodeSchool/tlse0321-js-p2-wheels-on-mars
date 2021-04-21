import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MuiThemeProvider theme={themeDark}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
