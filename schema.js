import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }
    type Pedido {
        producto: String
        precio: Int
    }
    type Email {
        email: String
    }
    """ Asigna la categoría del Cliente """
    enum TipoCliente {
        BASICO
        PREMIUM
    }
    type Query {
        getCliente(id: String): Cliente
    }
    input PedidoInput {
        producto: String
        precio: Int
    }
    input EmailInput {
        email: String
    }
    """ Campos para los clientes nuevos """
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        emails: [EmailInput]
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }
    """ Mutations para crear nuevos Clientes """
    type Mutation {
        #Nombre del resolver , Input con datos y el valor que retorna
        """ Te permite crear nuevos Clientes """
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;