import Employee from './Employee';
import TechStack from './TechStack';
import EmployeeTechStack from './EmployeeTechStack';

//Many to many relationship
Employee.belongsToMany(TechStack, { through: EmployeeTechStack });
TechStack.belongsToMany(Employee, { through: EmployeeTechStack });

const models = {
    Employee,
    TechStack,
    EmployeeTechStack
};

export = models;