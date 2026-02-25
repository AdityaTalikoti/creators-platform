import express from 'express';

import {
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userControllers.js';

const router = express.Router();

// User routes
router.post('/register', registerUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;