const paymentCtrl = require('../controllers/payment.controller');

const express = require('express');
const router = express.Router();

router.post('/', paymentCtrl.createPayment);
router.get('/', paymentCtrl.getPayments);
router.get('/:id', paymentCtrl.getPaymentParams);
router.delete('/:id', paymentCtrl.deletePayment);
router.put('/:id', paymentCtrl.modifyPayment);

module.exports = router;