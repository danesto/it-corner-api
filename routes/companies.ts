import express from 'express';
const router = express.Router();

//Controllers
import { getCompanies } from '../controllers/companiesController';

router.get('/', getCompanies);

export default router;