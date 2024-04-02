const express = require("express");
const router = express.Router();
const adminverifyToken = require('../middleware/adminVerifyToken');
const hadjInfoController=require('../controllers/hadj_info_controller');
router.post('/setHadjInfo', adminverifyToken, hadjInfoController.setHadjInfo);
router.post('/updatePlaces', adminverifyToken, hadjInfoController.updateThePlaces);
router.post('/getCommunes', adminverifyToken, hadjInfoController.getCommunes);
router.post('/getHadjInfo', adminverifyToken, hadjInfoController.getHadjInfo);
module.exports=router;