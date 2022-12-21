module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
        nama: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        no_telepon: {
            type: Sequelize.STRING,
        },
        alamat: {
            type: Sequelize.TEXT,
        },
    });
    return Customer;
};
