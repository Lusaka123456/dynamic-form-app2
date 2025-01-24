module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Submission', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        service_id: { type: DataTypes.INTEGER, allowNull: false },
        submission_data: { type: DataTypes.JSON, allowNull: false },
    });
};
