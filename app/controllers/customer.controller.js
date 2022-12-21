const db = require("../models");
const Customer = db.customer;
const config = require("../config/auth.config");
const Op = db.Sequelize.Op;

exports.all = (req, res) => {
    Customer.findAll()
        .then((customer) => {
            if (customer.length === 0) {
                return res
                    .status(404)
                    .send({ msg: "customer tidak ditemukan" });
            }
            return res.send({
                msg: "Success",
                data: customer,
            });
        })
        .catch((err) => {
            res.status(500).send({ msg: err.message });
        });
};

exports.add = (req, res) => {
    Customer.create({
        nama: req.body.nama,
        email: req.body.email,
        no_telepon: req.body.no_telepon,
        alamat: req.body.alamat,
    }).then((customer) => {
        res.send({
            msg: "Success",
            data: customer,
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Customer.update(
        {
            nama: req.body.nama,
            email: req.body.email,
            no_telepon: req.body.no_telepon,
            alamat: req.body.alamat,
        },
        {
            where: {
                id: id,
            },
        }
    )
        .then((num) => {
            console.log(num);
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully",
                });
            } else {
                res.send({
                    message: "Cannot update Customer",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error updating, ${err}`,
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Customer.destroy({
        where: {
            id: id,
        },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    msg: "deleted succesfully",
                });
            } else {
                res.send({
                    msg: "Cannot delete customer",
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.send({
                msg: "deleted error",
            });
        });
};
