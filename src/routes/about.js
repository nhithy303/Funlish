const express = require('express');
const router = express.Router();

const aboutController = require('../app/controllers/AboutController');

router.get('/tran-hoang-yen-nhi', aboutController.tranhoangyennhi);
router.get('/le-duc-trong', aboutController.leductrong);
router.get('/le-duy-duc', aboutController.leduyduc);
router.get('/le-phu-nhan', aboutController.lephunhan);
router.get('/luu-anh-dung', aboutController.luuanhdung);
router.get('/', aboutController.index);

module.exports = router;