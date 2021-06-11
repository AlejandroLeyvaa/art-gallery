const express = require('express');
const multer = require('multer');
const Controller = require('./index');
const fs = require('fs');
const { config } = require('../../../config/index');
const path = require('path');

const dirName = path.join(__dirname, '../../../../', 'public/assets/images')
let storage = multer.diskStorage({
  destination: path.join(__dirname, '../../../../', 'public/assets/images'),
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  dest: dirName,
});

// Routes
const router = express.Router();

router.get('/', getList);
router.post('/', upload.single('image'), insert);
async function getList(req, res, next) {
  try {
    const photos = await Controller.getList();

    fs.readdir(dirName, (err, files) => {
      if(files.length > 0) {

        res.status(200).json({
          data: photos,
          message: 'Photos listed'
        })
      } else {
        res.status(200).json({
          data: 'No image in database, please add some image',
          message: 'Photos listed'
        })
      }
    })
  } catch (err) {
    next(err);
  }
}

async function insert(req, res, next) {
  try {
    const { body, file } = await req;
    const { photo_description } = JSON.parse(JSON.stringify(body));
    const data = {
      photo_description,
      file,
    };
    await Controller.insert(data);
    res.status(200).json({
      message: 'Photo added',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
