import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer item={"Hola soy una prop"}/>
    </>
  );
}

export default App;
