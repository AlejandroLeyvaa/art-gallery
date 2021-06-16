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
        e.target.parentElement.parentElement.querySelectorAll('.img');
      [...imgTags].map((img) => currentImages.push(img.id));
    }
  });
}

function imageModal(event, modal) {
  // const img = modal.querySelector('img');
  modal.style.display = 'block';
  // modal.src = event.target.id;
  modal.style.backgroundImage = `url("${event.target.id}")`;
}

function formModal(event = null, modal) {
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}

function show(event, modal) {
  if (event.target.className.includes('img')) return imageModal(event, modal);
  if (event.target.className.includes('orange-plus'))
    return formModal(event, modal);
}

function hideModal(modal) {
  modal.style.display = 'none';
}


document.addEventListener('click', (e) => {
  if(e.target.className === 'back-modal') {
    const modal = document.querySelector('.modal-image');
    hideModal(modal);
  }
});

function showImage() {
  const modal = document.querySelector('.modal-image');
  document.querySelector('main').addEventListener('dblclick', (event) => show(event, modal));
}

function showForm() {
  const modal = document.querySelector('.modal-form');
  modal.style.display = 'none';
  document
    .querySelector('.orange-plus-button')
    .addEventListener('click', (event) => show(event, modal));
}

function backgroundImg() {
  let imgs = document.querySelector('main').querySelectorAll('.img');
  [...imgs].forEach((item) => {
    const src = item.id;
    item.style.backgroundImage = `url("${src}")`;
  });
}

window.addEventListener('load', async () => {
  state = await getData('/api/images');
  if (isHome()) {
    init(images);
    gallery();
    showImage();
    showForm();
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
    backgroundImg();
    currentImages = [];
  } else {
    init(currentImages);
    backgroundImg();
  }
});

init(images);
