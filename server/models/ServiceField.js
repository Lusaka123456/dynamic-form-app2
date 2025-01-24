module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ServiceField', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        service_id: { type: DataTypes.INTEGER, allowNull: false },
        field_name: { type: DataTypes.STRING, allowNull: false },
        field_type: { type: DataTypes.STRING, allowNull: false },
        field_label: { type: DataTypes.JSON, allowNull: false },
        field_placeholder: { type: DataTypes.JSON },
        field_validation: { type: DataTypes.STRING },
        field_max_length: { type: DataTypes.INTEGER, defaultValue: 0 },
        validation_error_message: { type: DataTypes.JSON },
    });
};
