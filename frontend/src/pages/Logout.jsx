import React from 'react';


function LogoutButton() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <input type="button" onClick={handleLogout} value="Log Out" />
  );
}

export default LogoutButton;
