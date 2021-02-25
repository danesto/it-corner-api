import express from 'express';
const router = express.Router();

//Controllers
import { getTechStacks } from '../controllers/techStacksController'; 

router.get('/', getTechStacks);

export default router;