import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  const onAuthorized = () => {
    setIsAuthorized(true);
    navigate('/'); // Redirect to the chat page after authorization
  };

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuth={isAuthorized} />}>
        <Route path="/" element={<Chat />} />
      </Route>
      <Route path="/login" element={<Login onAuthorized={onAuthorized} />} />
    </Routes>
  );
};

export default App;
