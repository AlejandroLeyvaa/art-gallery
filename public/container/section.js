export const section = (images, sect) => {
  const currentSection = sect.slice(1);
  let template;
  template = `
  <main class="section" id="${currentSection}">
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
