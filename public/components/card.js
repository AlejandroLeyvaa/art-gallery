export const card = (section, images) => {
  const template = `
    <article class="card" id="${section}">
      <div class="massonry">
        <div class="column-1">
          <img class="image-left" src="${images.one}" />
        </div>
        <div class="column-2">
          <img class="image-up" src="${images.two}" />
          <img class="image-down" src="${images.three}" />
        </div>
      </div>
      <div class="card-footer">
        <p>${section}</p>
        <a href="#/${section}">+</a>
      </div>
    </article>
    `;

  return template;
};
