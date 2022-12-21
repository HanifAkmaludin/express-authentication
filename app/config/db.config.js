module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "hanifakmaludin12",
    DB: "latihan-express",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
