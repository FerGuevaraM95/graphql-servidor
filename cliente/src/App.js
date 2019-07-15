import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Importar componentes
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';

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
      <Header />
      <div className="container">
      <Clientes />
      </div>
    </ApolloProvider>
  );
}

export default App;
