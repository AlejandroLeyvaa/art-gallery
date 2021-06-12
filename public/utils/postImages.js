export let blobImage;

const form = document.getElementById('add-image-form');
const addImageFileInput = document.getElementById('add-image');
const send = document.getElementById('send');

addImageFileInput.addEventListener('change', getBlobImage);
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  console.log({formData});
  formData.append('image', blobImage);
  post(formData);
});

function post(formData) {
  fetch('/api/images', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      console.log('RESPONSE', response);
    })
    .catch((err) => console.log(err));
}

function getBlobImage(e) {
  e.preventDefault();
  console.log(e);
  const image = e.target.files[0];
  const src = window.URL.createObjectURL(image);
  blobImage = src;

  console.log(blobImage);
}
