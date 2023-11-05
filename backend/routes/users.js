import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

// update users
router.put('/:id', verifyUser, updateUser)
// delete users
router.delete('/:id', verifyUser, deleteUser)
// get single users
router.get('/:id', verifyUser, getSingleUser)
// get all users
router.get('/', verifyAdmin, getAllUser)

export default router