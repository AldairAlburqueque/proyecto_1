const express = require('express');

const validExistUser = require('../middlewares/validExistUser.middleware');
const transferController = require('../controller/transfer.contorller');

const router = express.Router();

router.post('/', transferController.valid);

module.exports = router;
