import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Login from './Pages/Login';

const App = () => {
  const [user, setUser] = useState();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user && <div>Hello</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
