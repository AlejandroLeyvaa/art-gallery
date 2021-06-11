export const section = (images, sect) => {
  const currentSection = sect.slice(1);
  let template;
  template = `
  <main class="section" id="${currentSection}">
    <h2 class="section-title">${currentSection}</h2>
    <img class="section-first-image" src="${images[0]}" />
    <div class="massonry">
    ${images
      .map((src, index) => {
        let count = index + 1;
        if (index > 0) {
          count > 2 ? (count = index + 1) : null;
          if (count <= 2) {
            return `
            <div class="column column-1">
              <img class="section-second-image" src="${src}"/>
            </div>
          `;
          } else {
            return `
            <div class="column column-2">
              <img class="section-third-image" src="${src}"/>
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
