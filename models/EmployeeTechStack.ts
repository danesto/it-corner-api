import { DATE } from 'sequelize';
import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db';

import Employee from './Employee';
import TechStack from './TechStack';

const EmployeeTechStack = db.define('EmployeeTechStack', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    employee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Employee,
            key: 'id'
        },
        allowNull: false
    },
    techStack_id: {
        type: DataTypes.INTEGER,
        references: {
            model: TechStack
        },
        allowNull: false
    }
});

export default EmployeeTechStack;