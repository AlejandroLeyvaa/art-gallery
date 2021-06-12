import { onNavigate } from './utils/onNavigate.js';
import { getData } from './utils/getData.js';
import { getColumns } from './utils/getColumns.js';
import './utils/postImages.js';

const images = [
  {
    one: '../assets/images/art_1.jpg',
    two: '../assets/images/art_2.jpg',
    three: '../assets/images/art_3.jpg',
  },
  {
    one: '../assets/images/art_4.jpg',
    two: '../assets/images/art_5.jpg',
    three: '../assets/images/art_6.jpg',
  },
  {
    one: '../assets/images/art_7.jpg',
    two: '../assets/images/art_8.jpg',
    three: '../assets/images/art_9.jpg',
  },
  {
    one: '../assets/images/art_10.jpg',
    two: '../assets/images/art_11.jpg',
    three: '../assets/images/art_12.jpg',
  },
];

let currentImages = [];

let state;

function init(data) {
  onNavigate(data);
}

function isHome() {
  if (window.location.hash === '/' || window.location.hash === '') {
    return true;
  }
}

function gallery() {
  const gallery = document.getElementById('gallery');
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const imgTags =
        e.target.parentElement.parentElement.querySelectorAll('img');
      [...imgTags].map((img) => currentImages.push(img.id));
    }
  });
}

function show(e) {
  if (e.target.tagName === 'IMG') {
    const modal = document.querySelector('.modal-image');
    const img = modal.querySelector('img');
    console.log(modal, img);
    modal.style.display = 'block';
    // img.src = window.location + '/assets/images/' + e.target.id;
    img.src = e.target.id;
    console.log(e);
    console.log(e.target);
  }
}
function showImage() {
  document.addEventListener('dblclick', show);
  document.addEventListener('touchend', show);
}

function backgroundImg() {
  const imgs = document.querySelector('.gallery').querySelectorAll('img');
  [...imgs].forEach((item) => {
    const src = item.src;
    item.style.backgroundImage = `url("${src}")`;
    item.id = item.src;
    item.src = '';
  });
}

window.addEventListener('load', async () => {
  console.log(await getData('/api/images'));
  state = await getData('/api/images');
  if (isHome()) {
    init(images);
    gallery();
    showImage();
    backgroundImg();
    if (state.data.length > 0) {
      state.data.forEach(async (i) => {
        if (i.image_category !== '') {
          await getColumns(state, i.image_category);
        }
      });
    }
    currentImages = [];
  } else {
    window.location = '/';
  }
});

window.addEventListener('hashchange', () => {
  if (isHome()) {
    init(images);
    gallery();
    showImage();
    putImages();
    backgroundImg();
    currentImages = [];
  } else {
    init(currentImages);
  }
});

init(images);
