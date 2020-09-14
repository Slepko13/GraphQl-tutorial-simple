import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import MoviesList from './components/MoviesList/MoviesList'
import AddMovie from './components/AddMovie/AddMovie';


const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Movies list</h1>
        <MoviesList />
        <AddMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
