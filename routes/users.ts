import express from 'express';
const router = express.Router();

//Controllers
import { getUsers } from '../controllers/usersContoller'; 

router.get('/', getUsers);

export default router;