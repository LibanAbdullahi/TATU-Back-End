const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticate, requireOwnership } = require('../middlewares/auth.middleware');
const { uploadAvatar } = require('../utils/upload');

// Public routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

// Protected routes
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);

// Avatar upload
router.post('/:id/avatar', authenticate, uploadAvatar.single('avatar'), userController.uploadAvatar);

module.exports = router; 