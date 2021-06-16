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
    const images = await Controller.getList();

    fs.readdir(dirName, (err, files) => {
      if(files.length > 0) {

        res.status(200).json({
          data: images,
          message: 'Images listed'
        })
      } else {
        res.status(200).json({
          data: 'No images in database, please add some image',
          message: 'images listed'
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
    const { image_category } = JSON.parse(JSON.stringify(body));
    console.log(image_category);
    const data = {
      file,
      image_category
    };
    await Controller.insert(data);
    res.status(200).json({
      message: 'Image added',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
