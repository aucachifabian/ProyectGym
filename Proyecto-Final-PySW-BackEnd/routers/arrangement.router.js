const arrangementCtrl = require('../controllers/arrangement.controller');

const express = require('express');
const router = express.Router();

router.post('/', arrangementCtrl.createArrangement);
router.get('/', arrangementCtrl.getArrangements);
router.get('/:id', arrangementCtrl.getArrangementParams);
router.delete('/:id', arrangementCtrl.deleteArrangement);
router.put('/:id', arrangementCtrl.modifyArrangement);

module.exports = router;