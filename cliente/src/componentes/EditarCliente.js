import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';

import { CLIENTE_QUERY } from '../queries';

class EditarCliente extends Component {
    state = {}

    render() {
        // Tomar el ID del contacto a editar
        const { id } = this.props.match.params;
        console.log(id);
        return(
            <Fragment>
                <h2 className="text-center">Editar Cliente</h2>
                <Query query={CLIENTE_QUERY} variables={{id}}>
                    {({loading, error, data}) => {
                        if(loading) return 'Cargando...';
                        if(error) return `Error ${error.message}`;

                        console.log(data);
                    }}
                </Query>
            </Fragment>
        );
    }
}

export default EditarCliente;