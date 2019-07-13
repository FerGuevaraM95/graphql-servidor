import express from 'express';
// GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo listo');
});

// el resolver
const root = {hola: () => "Hola mundo desde GraphQL"};

app.use('/graphql', graphqlHTTP({
    // que schema va a utilizar
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphql
    graphiql: true
}))

app.listen(8000, () => console.log('El servidor esta funcionando'));