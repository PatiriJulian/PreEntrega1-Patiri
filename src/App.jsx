import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Sections/ItemListContainer';
 
function App() {

  return (
    <> 
      <NavBar/>
      <section>
        <ItemListContainer greetings="Hola usuario"/>
      </section>
    </>
  )
}

export default App
