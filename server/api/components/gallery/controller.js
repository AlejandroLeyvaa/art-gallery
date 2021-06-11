const { nanoid } = require('nanoid');

const TABLE = 'gallery';

function Controller (store) {
  function getList() {
    return store.getList(TABLE);
  };

  async function insert(body) {
    const data = await body;
    const photo = {
      image_id: nanoid(),
      image_name: data.file.filename,
      image_description: data.photo_description,
      image_size: data.file.size,
      image_path: data.file.path,
    };

    return store.insert(TABLE, photo);
  };

  return {
    getList,
    insert,
  };
};

module.exports = Controller;