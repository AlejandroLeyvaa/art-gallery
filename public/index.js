import { onNavigate } from './utils/onNavigate.js';
import { getData } from './utils/getData.js';

function init(data) {
  onNavigate();
}

window.addEventListener('load', async () => {
  init();
});

window.addEventListener('hashchange', () => {
  init();
});

console.log('Hello world');