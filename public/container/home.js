import { card } from '../components/card.js';

export const home = (data) => {
  const images = data;
  let template;
  template = `
  <header class="header">
    <div class="icon">
      <span>back</span>
    </div>
    <div class="main-title">
      <h2>Boards</h2>
    <p>Following gallries to power up your art careere</p>
    </div>
  </header>
  <main class="gallery" id="gallery">
  ${card('Paintings', images[0])}
  ${card('Illustrations', images[1])}
  ${card('Typography', images[2])}
  ${card('Drawings', images[3])}
    </main>`;

  return template;
};
