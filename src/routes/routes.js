import { Router } from "express";
import { getUsers, postUsers, getUserById, deleteUser, putUsers } from '../controllers/CrudUsers.js';

const router= Router();


router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUsers);
router.put('/users/:id', putUsers);
router.delete('/users/:id', deleteUser)

export default router;
