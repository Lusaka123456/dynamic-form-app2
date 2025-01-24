const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Disable SQL query logging
});

// Import Models
const Service = require('./Service')(sequelize, DataTypes);
const ServiceField = require('./ServiceField')(sequelize, DataTypes);
const Submission = require('./Submission')(sequelize, DataTypes);

// Define Relationships
Service.hasMany(ServiceField, { foreignKey: 'service_id' });
ServiceField.belongsTo(Service, { foreignKey: 'service_id' });

Service.hasMany(Submission, { foreignKey: 'service_id' });
Submission.belongsTo(Service, { foreignKey: 'service_id' });

// Export Sequelize instance and Models
module.exports = {
    sequelize,
    Service,
    ServiceField,
    Submission,
};
