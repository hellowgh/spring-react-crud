import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TheHeader from './components/TheHeader.jsx';
import TheFooter from './components/TheFooter.jsx';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';
import EmployeeComponent from './components/EmployeeComponent.jsx';

function App () {
  return (
    <>
      <BrowserRouter>
        <TheHeader></TheHeader>
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
          <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
        </Routes>
        <TheFooter></TheFooter>
      </BrowserRouter>
    </>
  );
}

export default App;
