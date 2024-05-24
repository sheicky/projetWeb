const express = require('express');
const { registerUser, loginUser, forgotPassword, resetPassword, updateUserPassword } = require('../../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put('/update-password', updateUserPassword);

module.exports = router;
