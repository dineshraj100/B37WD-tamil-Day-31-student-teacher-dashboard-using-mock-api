import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { All } from './All';
import './App.css';
import Context from './context';
import Dashboard from './dashboard';
import { Form } from './form';
import Home from './home';
import Login from './Login';
import ProtectedRoute from './ProtectedRouter';
import { Students } from './Students';
import Teachers from './Teachers';

function App() {
  let isLoggedin = localStorage.getItem('loggedin');
  const shop = useContext(Context);

  return (
    <div
      className='App'
      style={
        shop.colormode === 'light'
          ? { background: 'white', color: 'black', minHeight: '100vh' }
          : { background: '#1A365D', color: 'white', minHeight: '100vh' }
      }
    >
      <div></div>
      <ChakraProvider>
        <ColorModeScript initialColorMode='black' />

        <BrowserRouter>
          {shop.loginState ===
          'jwejdfodsj-sdfnsdofsdjosdjf-wenrwelrm-saodfjsddom-sndfd' ? (
            <Dashboard />
          ) : (
            <div></div>
          )}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path='/all'
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <All />
                </ProtectedRoute>
              }
            />
            <Route
              path='/teachers'
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Teachers />
                </ProtectedRoute>
              }
            />
            <Route
              path='/students'
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Students />
                </ProtectedRoute>
              }
            />
            <Route
              path='/form'
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route
              path='/form/:id'
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Form />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
