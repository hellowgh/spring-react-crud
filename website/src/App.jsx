import './App.css';
import TheHeader from './components/TheHeader.jsx';
import TheFooter from './components/TheFooter.jsx';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';

function App () {
  return (
    <>
      <TheHeader></TheHeader>
      <ListEmployeeComponent></ListEmployeeComponent>
      <TheFooter></TheFooter>
    </>
  );
}

export default App;
