import mongoose from 'mongoose';
import { Clientes } from './db';

class Cliente {
    constructor(id, { nombre, apellido,
        empresa, emails, edad, tipo, pedidos }) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.emails = emails;
        this.edad = edad;
        this.tipo = tipo;
        this.pedidos = pedidos;
    }
}

export const resolvers = {
    Query: {
        getCliente: ({ id }) => {
            return new Cliente(id, clientesDB[id]);
        },
    },
    Mutation: {
        crearCliente: (root, { input }) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            clientesDB[id] = input;
            return new Cliente(id, input);
        }
    }
}
