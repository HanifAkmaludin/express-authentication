const controller = require("../controllers/customer.controller");

module.exports = function (app) {
    app.get("/api/customer/all", controller.all);
    app.post("/api/customer/add", controller.add);
    app.put("/api/customer/update/:id", controller.update);
    app.delete("/api/customer/delete/:id", controller.delete);
};
