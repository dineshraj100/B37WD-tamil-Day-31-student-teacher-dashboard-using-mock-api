import { useEffect, useState } from 'react';
import Context from './context';
import axios from 'axios';

export default function Provider(props) {
  const [colormode, setColorMode] = useState('light');
  localStorage.setItem('chakra-ui-color-mode', 'undefined');
  const [loginState, setLoginState] = useState(
    localStorage.getItem('loggedin')
  );

  const [allData, setAllData] = useState([]);

  const getProducts = () => {
    axios
      .get('https://624a7f85852fe6ebf887cb09.mockapi.io/stud-teacher')
      .then((data) => setAllData(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => getProducts(), []);

  return (
    <Context.Provider
      value={{
        loginState,
        setLoginState,
        colormode,
        setColorMode,
        allData,
        setAllData,
        getProducts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
