export const card = (section, images) => {
  const template = `
    <article class="card" id="${section}">
      <div class="massonry">
        <div class="column-1">
          <div class="img image-left" id="${images.one}"></div>
        </div>
        <div class="column-2">
          <div class="img image-up" id="${images.two}"></div>
          <div class="img image-down" id="${images.three}"></div>
        </div>
      </div>
      <div class="card-footer">
        <p>${section}</p>
        <a href="#/${section}">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4.87243V3.02881H5.01266V0H2.98734V3.02881H0V4.87243H2.98734V8H5.01266V4.87243H8Z" fill="white"/>
          </svg>
        </a>
      </div>
    </article>
    `;

  return template;
};
