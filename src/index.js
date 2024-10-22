import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import {Provider} from 'react-redux';


function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // видны верхний ИЛИ нижний край элемента
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      realSrc += '?nocache=' + Math.random();

      img.src = realSrc;

      img.dataset.src = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
)
