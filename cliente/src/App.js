import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importar componentes
import Header from './componentes/Layout/Header';
import Clientes from './componentes/Clientes/Clientes';
import NuevoCliente from './componentes/Clientes/NuevoCliente';
import EditarCliente from './componentes/Clientes/EditarCliente';
import Productos from './componentes/Productos/Productos';
import NuevoProducto from './componentes/Productos/NuevoProducto';
import EditarProducto from './componentes/Productos/EditarProducto';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/clientes" component={Clientes}/>
              <Route exact path="/clientes/nuevo" component={NuevoCliente}/>
              <Route exact path="/clientes/editar/:id" component={EditarCliente}/>
              <Route exact path="/productos" component={Productos}/>
              <Route exact path="/productos/nuevo" component={NuevoProducto}/>
              <Route exact path="/productos/editar/:id" component={EditarProducto}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
