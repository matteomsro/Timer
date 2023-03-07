"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findById = exports.create = exports.findAll = void 0;
const usuario_model_1 = require("../models/usuario.model");
const findAll = function (req, res) {
    usuario_model_1.Usuario.findAll(function (err, usuario) {
        console.log('controller');
        if (err) {
            res.send(err);
        }
        else {
            console.log('res', usuario);
            res.send(usuario);
        }
    });
};
exports.findAll = findAll;
const create = function (req, res) {
    const new_usuario = new usuario_model_1.Usuario(req.body);
    // handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor provea todos los campos requeridos.' });
    }
    else {
        usuario_model_1.Usuario.create(new_usuario, function (err, usuario) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ error: false, message: "Usuario añadido exitosamente" });
            }
        });
    }
};
exports.create = create;
const findById = function (req, res) {
    usuario_model_1.Usuario.findById(req.params.id, function (err, usuario) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(usuario);
        }
    });
};
exports.findById = findById;
const update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor provea todos los campos requeridos.' });
    }
    else {
        usuario_model_1.Usuario.update(req.params.id, new usuario_model_1.Usuario(req.body), function (err, usuario) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ error: false, message: 'Usuario modificado exitosamente' });
            }
        });
    }
};
exports.update = update;
const remove = function (req, res) {
    usuario_model_1.Usuario.remove(req.params.id, function (err, usuario) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ error: false, message: 'Usuario borrado exitosamente' });
        }
    });
};
exports.remove = remove;
