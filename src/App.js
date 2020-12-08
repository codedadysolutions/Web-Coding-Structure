import { useState } from 'react';
import './App.css';
import Routes from './Routes';
import { UserContext } from './UserContext';

function App() {

  const [name, setName] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [data, setData] = useState()
  const [token, setToken] = useState(null)


  return (
    <div>
      {/* sharing context to all routes */}
      {/* key[0] to receve value , key[1] to set value  */}

      <UserContext.Provider value={{ name: [name, setName], phoneNumber: [phoneNumber, setPhoneNumber], data: [data, setData], token: [token, setToken] }} >
        {/* navigation related things are imported here from Routes file */}
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
