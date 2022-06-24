import { ApolloProvider, } from '@apollo/client'
import {client} from "./lib/Apollo";
import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App


