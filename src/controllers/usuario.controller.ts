import { Usuario } from "../models/usuario.model";
import express, { Express, Request, Response } from 'express';

export const findAll = function(req: Request,res: Response){
    Usuario.findAll(function(err: Error,usuario:Usuario){
        console.log('controller');
        if (err){
            res.send(err);
        }
        else{
            console.log('res',usuario);
            res.send(usuario);
        }

    });
};

export const create = function(req: Request, res: Response){
    const new_usuario = new Usuario(req.body);
    // handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: 'Por favor provea todos los campos requeridos.'});
    }
    else{
        Usuario.create(new_usuario, function(err: Error,usuario: Usuario){
            if(err){
                res.send(err);
            }
            else{
                res.json({error:false,message:"Usuario añadido exitosamente"});
            }
        });
    }
    
};

export const findById = function(req: Request, res: Response) {
    Usuario.findById(req.params.id, function(err: Error, usuario: Usuario) {
        if (err){
            res.send(err);
        }
        else{
            res.json(usuario);
        }
    });
};

export const update = function(req:Request, res:Response) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor provea todos los campos requeridos.' });
    }
    else{
        Usuario.update(req.params.id, new Usuario(req.body), function(err: Error, usuario: Usuario) {
            if (err){
                res.send(err);
            }
            else{
                res.json({ error:false, message: 'Usuario modificado exitosamente'});
            }
        });
    }
};

export const remove = function(req:Request, res:Response) {
    Usuario.remove( req.params.id, function(err: Error, usuario: Usuario) {
        if (err)  {
            res.send(err);
        }
        else{
            res.json({ error:false, message: 'Usuario borrado exitosamente' });
        }
    });
};