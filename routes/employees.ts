import express from 'express';
const router = express.Router();

//Controllers
import { getEmployees } from '../controllers/usersContoller'; 

router.get('/', getEmployees);

export default router;