"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const db_config_1 = require("../config/db.config");
class Usuario {
    constructor(usuario) {
        this.nombre = usuario.nombre;
        this.apellido = usuario.apellido;
        this.correo = usuario.correo;
        this.rol = usuario.rol;
    }
    static create(nuevoUsuario, result) {
        db_config_1.dbConn.query("INSERT INTO usuarios SET ?", nuevoUsuario, function (err, res) {
            if (err) {
                console.log("error", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }
    static findById(id, result) {
        db_config_1.dbConn.query("Select * from usuarios WHERE id = ?", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findAll(result) {
        db_config_1.dbConn.query("SELECT * from usuarios", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('usuarios : ', res);
                result(null, res);
            }
        });
    }
    static update(id, usuario, result) {
        db_config_1.dbConn.query("UPDATE usuarios SET nombre=?,apellido=?,correo=?,rol=? WHERE id=?", [usuario.nombre, usuario.apellido, usuario.correo, usuario.rol, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static remove(id, result) {
        db_config_1.dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
}
exports.Usuario = Usuario;
