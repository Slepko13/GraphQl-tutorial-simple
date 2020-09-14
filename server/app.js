const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = 3005;
const mongoUri = " mongodb+srv://fosfat:12345@cluster0-dlm3x.mongodb.net/GraphQL-tutorial?retryWrites=true&w=majority"

app.use(cors());
mongoose.connect(mongoUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error : ${err}`));
dbConnection.once('open', () => console.log(`Connected to DB`));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, error => {
    error ? console.log(error) : console.log(`Server started at port ${PORT}`)
})