import { useState, useEffect } from 'react';
import Router from './Config/Router';
import './index.css';
// import  Login  from './Views/Login';
// import  SignUp  from './Views/SignUp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Login/> */}
       {/* <SignUp/> */}
        <Router/>
        
        
      </header>
    </div>
  );
}

export default App;
