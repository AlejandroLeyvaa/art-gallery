export let blobImage;

const addPhoto = (e) => {
  console.log(e);
  e.preventDefault();
  const image = e.target.files[0];
  const src = window.URL.createObjectURL(image);
  blobImage = src;
};

function post() {
  fetch('/api/photos', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      console.log('RESPONSE', response);
    })
    .catch((err) => console.log(err));
}

export function dashboardbuttons() {
  const addImageForm = document.getElementById('add-image-form');
  const addImageFileInput = document.getElementById('add-image');
  addImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const formData = new FormData(addImageForm);
    // formData.append('image', blobImage);

  });
  // Button Add Photo
  addImageFileInput.addEventListener('change', addPhoto);
}
