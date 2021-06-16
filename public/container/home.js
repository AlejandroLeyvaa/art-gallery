import { card } from '../components/card.js';

export const home = (data) => {
  const images = data;
  let template;
  template = `
  <header class="header">
    <div class="icon">
      <span id="back" class="back">
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 11L12 20" stroke="#FD7C4B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <div class="main-title">
      <h2>Boards</h2>
    <p>Following gallries to power up your art careere</p>
    </div>
    <div id="filters">
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
