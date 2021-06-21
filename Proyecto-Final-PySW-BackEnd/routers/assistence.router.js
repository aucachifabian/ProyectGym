const assistenceCtrl = require('../controllers/assistence.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , assistenceCtrl.createAssistence);
router.get('/'      , assistenceCtrl.getAssistences);
router.get('/:id'   , assistenceCtrl.getAssistenceParams);
router.delete('/:id', assistenceCtrl.deleteAssistence);
router.put('/'   , assistenceCtrl.modifyAssistence);

module.exports = router;
