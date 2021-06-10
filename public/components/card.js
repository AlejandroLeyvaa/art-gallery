export const card = () => {
  const template = `
    <article class="card">
      <div class="massonry">
        <div class="column-1">
          <div class="red"></div>
        </div>
        <div class="column-2">
          <div class="blue"></div>
          <div class="green"></div>
        </div>
      </div>
      <div class="card-footer">
        <p>paintings</p>
        <div>plus</div>
      </div>
    </article>
    `;

    return template;
}