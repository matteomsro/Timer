import { dbConn } from '../config/db.config';

export class Usuario {
    nombre: string;
    apellido: string;
    correo: string;
    rol: string;

    constructor(usuario: Usuario) {
        this.nombre = usuario.nombre;
        this.apellido = usuario.apellido;
        this.correo = usuario.correo;
        this.rol = usuario.rol;
    }

    static create(nuevoUsuario: Usuario, result: any) {
        dbConn.query("INSERT INTO usuarios SET ?", nuevoUsuario, function (err: any, res: any) {
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
    static findById(id: String, result: any) {
        dbConn.query("Select * from usuarios WHERE id = ?", id, function (err: any, res: any) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }


    static findAll(result: any) {
        dbConn.query("SELECT * from usuarios", function (err: any, res: any) {
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

    static update(id: any, usuario: any, result: any) {
        dbConn.query("UPDATE usuarios SET nombre=?,apellido=?,correo=?,rol=? WHERE id=?", [usuario.nombre, usuario.apellido, usuario.correo, usuario.rol, id], function (err: any, res: any) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }

    static remove(id: any, result: any) {
        dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err: any, res: any) {
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
