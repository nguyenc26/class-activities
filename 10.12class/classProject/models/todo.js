module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            isEmail: true
        }
    });
    return Todo;
};