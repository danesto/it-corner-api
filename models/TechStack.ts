import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db';

const techStack = db.define('TechStack', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    tech_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default techStack;