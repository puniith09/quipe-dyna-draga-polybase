import React, { useState } from 'react';

function UserName() {
  const [userName, setUserName] = useState('');

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="userName">User Name:</label>
      <input type="text" id="userName" value={userName} onChange={handleInputChange} />
    </div>
  );
}

export default UserName;