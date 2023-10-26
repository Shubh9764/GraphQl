import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});
function App() {
  client.query({
      query: gql`
        query GetLocations {
          getTodos {
            id
            title
            user {
              name
            }
          }
        }
      `,
  })
  .then((res) => console.log(res.data))
  .catch((e) => {
    console.log(e)
  })
  // console.log(todos)
  return (
    <div className="App">

    </div>
  );
}

export default App;
