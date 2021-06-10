import { card } from '../components/card.js';

export const home = (data) => {
  let template;

  template = `
    <main class="gallery">
      ${card()}
      ${card()}
      ${card()}
    </main>`
  ;

  return template;
};
