import React, { useState, useEffect } from 'react';
import UserName from './components/UserName';
import HashId from './components/HashId';
import { web3 } from './services/web3';
import { polybase } from './services/polybase';
import { authenticate } from './services/dynamicSDK';

function App() {
  const [userName, setUserName] = useState('');
  const [hashId, setHashId] = useState('');

  useEffect(() => {
    authenticate()
      .then(user => {
        setUserName(user.name);
        setHashId(user.hashId);
      })
      .catch(err => console.error(err));
  }, []);

  const saveToPolybase = () => {
    polybase.store(userName, hashId)
      .then(() => console.log('Data stored successfully'))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <UserName name={userName} />
      <HashId id={hashId} />
      <button onClick={saveToPolybase}>Save</button>
    </div>
  );
}

export default App;