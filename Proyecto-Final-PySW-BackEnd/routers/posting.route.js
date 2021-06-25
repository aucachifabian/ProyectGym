const postingCtrl = require('../controllers/posting.controller');

const express = require('express');
const router = express.Router();

router.post('/', postingCtrl.createPosting);
router.get('/', postingCtrl.getPostings);
router.get('/:id', postingCtrl.getPostingParams);
router.delete('/:id', postingCtrl.deletePosting);
router.put('/', postingCtrl.modifyPosting);

module.exports = router;