const express = require('express');
const { registerUser, loginUser, forgotPassword, resetPassword, verifyEmail, updateUserPassword } = require('../../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:resetToken', resetPassword);
router.post('/verify-email', verifyEmail);
router.post('/update-password', updateUserPassword);

module.exports = router;
