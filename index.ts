import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

// Initialize dotenv package
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet());

//Routes
import { usersRoutes, techStacksRoutes, companiesRoutes } from './routes';

app.use('/api/users', usersRoutes);
app.use('/api/techStacks', techStacksRoutes);
app.use('/api/companies', companiesRoutes);

app.listen(PORT, () => console.log('listening on PORT: ' + PORT));

