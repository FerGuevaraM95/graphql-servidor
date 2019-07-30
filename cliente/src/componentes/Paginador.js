import React, { Component } from 'react'

class Paginador extends Component {

    
    state = {
        paginador: {
            paginas: Math.ceil( this.props.totalClientes / this.props.limite)
        }
    }
    
    render() {

        // Boton anterior
        const {actual} = this.props;
        const btnAnterior = (actual > 1) ? <button onClick={this.props.paginaAnterior} type="button" className="btn btn-success mr-2">
            &laquo; Anterior
        </button> : '';
        // Boton siguite
        const {paginador: {paginas}} =this.state;
        const btnSiguiete = (actual !== paginas) ? <button onClick={this.props.paginaSiguiente} type="button" className="btn btn-success">
        Siguiente &raquo;
        </button> : '';


        return(
            <div className="mt-5 d-flex justify-content-center">
                {btnAnterior}
                {btnSiguiete}
            </div>
        );
    }
}

export default Paginador;