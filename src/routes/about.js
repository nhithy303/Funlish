const express = require('express');
const router = express.Router();

const aboutController = require('../app/controllers/AboutController');

router.post('/tran-hoang-yen-nhi/ask', aboutController.ask);
router.post('/tran-hoang-yen-nhi/post', aboutController.newPost);
router.get('/tran-hoang-yen-nhi/logout', aboutController.logOut);
router.post('/tran-hoang-yen-nhi/login', aboutController.logIn);
router.get('/tran-hoang-yen-nhi', aboutController.tranhoangyennhi);
router.get('/le-duc-trong', aboutController.leductrong);
router.get('/le-duy-duc', aboutController.leduyduc);
router.get('/le-phu-nhan', aboutController.lephunhan);
router.get('/luu-anh-dung', aboutController.luuanhdung);
router.get('/', aboutController.index);

module.exports = router;