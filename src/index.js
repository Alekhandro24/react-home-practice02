import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from '@emotion/react';
import './index.css';
// import { App } from './components/WCCONFERECE/App/App.jsx';
// import { theme } from './components/WCCONFERECE/contants';
// import { App } from 'components/App2/App';
// import { App } from 'components/TodoList/App';
// import { App } from 'components/Module3/App';
import { App } from 'components/Dog/App';

// 1. Conference

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// 2. Форми (2 заняття, група 18 )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <App />
//   </React.StrictMode>,
// );

// 3. Форми папка TodoList (2 модуль, група 18 )
// 4. Збереження в LocalStorage(3 модуль)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// // 5. LifeStyle(3 модуль, 1-е заняття)Збереження в LocalStorage
// import { GlobalStyle } from 'components/Module3/GlobalStyle';
// import stickers from 'components/Module3/stickers.json';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App initialStickers={stickers} />
//     <GlobalStyle />
//   </React.StrictMode>,
// );

// 6. Dog
import { GlobalStyle } from 'components/Module3/GlobalStyle';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);
