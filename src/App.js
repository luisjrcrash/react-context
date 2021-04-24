import './App.css';
import React from 'react';
import Profile from './components/Profile';
import UserList from './components/UserList';


function App() {
  const data = {
    nombre: "Luis",
    edad: 35
  }
  return (
    <div className="App">
      <Profile/>
      <UserList/>
    </div>
  );
}

export default App;
