import { onNavigate } from './utils/onNavigate.js';
import './utils/postImages.js';
import { getData } from './utils/getData.js';
import { card } from './components/card.js';

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
    console.log(e.target);
    if (e.target.tagName === 'A') {
      const imgTags =
        e.target.parentElement.parentElement.querySelectorAll('img');
      [...imgTags].map((img) => currentImages.push(img.src));
    }
  });
}

window.addEventListener('load', () => {
  if (isHome()) {
    init(images);
    gallery();
    currentImages = [];
  } else {
    window.location = '/';
  }
});

window.addEventListener('hashchange', () => {
  if (isHome()) {
    init(images);
    gallery();
    currentImages = [];
  } else {
    init(currentImages);
  }
});

init(images);

