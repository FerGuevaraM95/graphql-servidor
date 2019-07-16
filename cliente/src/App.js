import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importar componentes
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';
import NuevoCliente from './componentes/NuevoCliente';
import EditarCliente from './componentes/EditarCliente';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
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
              <Route exact path="/" component={Clientes}/>
              <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
              <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
