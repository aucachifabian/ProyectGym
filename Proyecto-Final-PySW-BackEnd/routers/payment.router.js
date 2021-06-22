const paymentCtrl = require('../controllers/payment.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , paymentCtrl.createPayment);
router.get('/'      , paymentCtrl.getPayments);
router.get('/:id'   , paymentCtrl.getPaymentParams);
router.get('/id/:student'   , paymentCtrl.getPaymentByIdStudent);
router.delete('/:id', paymentCtrl.deletePayment);
router.put('/'   , paymentCtrl.modifyPayment);

module.exports = router;