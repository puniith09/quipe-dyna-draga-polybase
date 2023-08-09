import React, { useState, useEffect } from 'react';
import { generateHash } from '../utils/hashGenerator';

function HashId() {
  const [hashId, setHashId] = useState('');

  useEffect(() => {
    const newHashId = generateHash();
    setHashId(newHashId);
  }, []);

  return (
    <div>
      <h2>Your Hash ID</h2>
      <p>{hashId}</p>
    </div>
  );
}

export default HashId;