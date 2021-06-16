export const section = (images, sect) => {
  const currentSection = sect.slice(1);
  let template;
  template = `
  <main class="section" id="${currentSection}">
    <div class="icon">
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 11L12 20" stroke="#FD7C4B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span id="back" class="back"></span>
    </div>
    <h2 class="section-title">${currentSection}</h2>
    <div class="img section-first-image" id="${images[0]}"></div>
    <div class="massonry">
    ${images
      .map((src, index) => {
        let count = index + 1;
        if (index > 0) {
          count > 2 ? (count = index + 1) : null;
          if (count <= 2) {
            return `
            <div class="column column-1">
              <div class="img section-second-image" id="${src}"></div>
            </div>
          `;
          } else {
            return `
            <div class="column column-2">
              <div class="img section-third-image" id="${src}"></div>
            </div>
          `;
          }
        }
      })
      .join('')}
    </div>

  </main>`;

  return template;
};
