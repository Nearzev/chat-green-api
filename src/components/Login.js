import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ onAuthorized }) => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Загрузка значений из кеша браузера при монтировании компонента
    const storedIdInstance = localStorage.getItem('idInstance');
    const storedApiTokenInstance = localStorage.getItem('apiTokenInstance');

    if (storedIdInstance && storedApiTokenInstance) {
      setIdInstance(storedIdInstance);
      setApiTokenInstance(storedApiTokenInstance);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
      );

      if (response.status === 200) {
        onAuthorized();

        // Сохранение значений в кеше браузера при успешной авторизации
        localStorage.setItem('idInstance', idInstance);
        localStorage.setItem('apiTokenInstance', apiTokenInstance);
      } else {
        setError('Неверные учетные данные');
      }
    } catch (error) {
      setError('Ошибка при выполнении запроса');
    }

    setIsLoading(false);
  };

  return (
    <div className="authorization-container">
      <h2 className="authorization-title">Авторизация</h2>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="idInstance">idInstance:</label>
          <input
            type="text"
            id="idInstance"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="apiTokenInstance">apiTokenInstance:</label>
          <input
            type="text"
            id="apiTokenInstance"
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
          />
        </div>
        {isLoading ? (
          <p>Загрузка...</p>
        ) : (
          <>
            <button className="login-button" onClick={handleLogin}>
              Войти
            </button>
            {error && <p className="error-message">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
