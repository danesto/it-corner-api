import * as dotenv from 'dotenv';
import sequelize from './config/db';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import models, { Employee, TechStack, EmployeeTechStack } from './models';

// Initialize dotenv package
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet());

//Routes
import { employeesRoutes, techStacksRoutes, companiesRoutes } from './routes';

app.use('/api/employees', employeesRoutes);
app.use('/api/techStacks', techStacksRoutes);
app.use('/api/companies', companiesRoutes);

//404 page
app.get('*', (req: any, res: any) => {
    res.json({
        message: '404 - requested route does not exist!'
    })
})

sequelize
.sync()
.then((res) => {
    console.log(res)
    app.listen(PORT, () => console.log('listening on PORT: ' + PORT));
})
.catch(err => {
    console.log(err);
});
