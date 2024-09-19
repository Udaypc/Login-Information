
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Header from "./components/header/"
import FirstPage from "./components/firstPage/"
import SecondPage from "./components/secondPage/"
import ThirdPage from "./components/thirdPage/"


function App(){
  return <>
        <Header />
        <Routes>
          <Route exact path="/" element={<FirstPage/>} />
          <Route  path="/secondPage" element={<SecondPage/>} />
          <Route  path="/thirdPage" element={<ThirdPage/>} />
        </Routes>
      </>
}

export default App;
