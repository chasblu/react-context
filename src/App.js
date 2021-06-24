import { useState, createContext } from 'react';
import './App.css';

import ComponentA from './components/ComponentA';

export const DataContext = createContext();

console.log(DataContext);

function App() {
  const [username, setUsername] = useState('Chas');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <DataContext.Provider value={{username, setLoggedIn, loggedIn}}>
      <h1>Learning React Context</h1>
      {loggedIn ? "Logged In" : "Logged Out"}
      <ComponentA />
    </DataContext.Provider >

  );
}

export default App;
