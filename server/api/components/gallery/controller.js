const { nanoid } = require('nanoid');

const TABLE = 'images';

function Controller (store) {
  function getList() {
    return store.getList(TABLE);
  };

  async function insert(body) {
    const data = await body;
    const photo = {
      image_id: nanoid(),
      image_path: data.file.path,
      image_category: data.image_category
    };

    return store.insert(TABLE, photo);
  };

  return {
    getList,
    insert,
  };
};

module.exports = Controller;