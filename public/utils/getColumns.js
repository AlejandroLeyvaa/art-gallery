export function getSrc(item) {
  const path = item.image_path;
  const pathSplit = path.split('\\');
  const imageName = pathSplit[pathSplit.length - 1]; // The name is the las index of a path
  const src = `./assets/images/${imageName}`;

  return src;
}

export async function getColumns({data}, id) {
  const card = document.getElementById(id);
  const columnLeft = card.querySelector('.column-1');
  const columnRight = card.querySelector('.column-2');
  await data.forEach((item, index) => {
    const img = document.createElement('img');
    const count = index;
    img.src = getSrc(item);
    if(index === 0) {
      img.className = 'image-left';
      columnLeft.appendChild(img);
    }

    if(count === 1) {
      img.className = 'image-up';
      columnRight.appendChild(img);
    }

    if(count === 2) {
      img.className = 'image-down';
      columnRight.appendChild(img);
      count = 0;
    }
  });
}