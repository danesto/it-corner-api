import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db';

const Employee = db.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resume: {
        type: DataTypes.STRING,
        allowNull: true
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profile_img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    seniority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    current_company: {
        type: DataTypes.STRING,
        allowNull: true
    },
    current_position: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Employee;