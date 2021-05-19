// import logo from './logo.svg';
import './App.css';
import MouseColor from './components/MouseColor';
import WeatherComponent from './components/WeatherComponent';
// import Saludo from './components/Saludo';
// import SaludoF from './components/SaludoF';
import ListaContactos from './containers/ListaContactos';
import ListaTareas from './containers/ListaTareas';
import Contacto from './models/Contacto';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';
import TareaDetail from './Pages/TareaDetail'
import PrivatePage from './Pages/PrivatePage';

function App() {

  let misContactos = [
    new Contacto('Martín', 'martin@imaginagroup.com'),
    new Contacto('Sergio', 'sergio@imaginagroup.com')
  ]

  let misOtrosContactos = [
    {
      nombre: 'Pepe',
      email: 'pepe@imaginagro up.com'
    }
  ]

  let listadoTareasEjemplo = [
    {
      id:1, titulo:'Tarea 1', descripcion: 'Mi primera tarea'
    },
    {
      id:2, titulo:'Tarea 2', descripcion: 'Mi segunda tarea'
    }
  ]

  return (
      
      <Router>
      <div>
        <aside>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/about'>About</Link>
          <Link to='/faqs'>Faqs</Link>
          <Link to='/private'>Private</Link>



        </aside>
      </div>
      <main>
        <Route path='/' component={HomePage}/>
        <Route path='/profile' component={ProfilePage}/>
        <Route path='/(about|faqs)' component={AboutPage}/>
        <Route path='/private' component={PrivatePage}></Route>
        <Route path='/tareas/:id' render={({match }) => 
         <TareaDetail tarea={listadoTareasEjemplo[match.params.id-1]}/>}/>
        <Route path='/notFound' 
          render={() => {
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }}
        />

      </main>
    </Router>
    // {/* <div className="App">
    //   <header className="App-header">
    //     { /* Aquí vamos a renderizar nuestro primer componente de clase*/ }
    //     {/* <Saludo nombre="Martín" /> */}
    //     { /* Aquí vamos a renderizar nuestro primer componente funcional*/ }
    //     {/* <SaludoF nombre="Martín"/> */}
    //     {/* Aquí vamos a renderizar nuestro primer componente con componentes anidados en un Loop*/}
    //     {/* <ListaContactos contactos={ misOtrosContactos }/> */}
    //     {/* Aquí vamos a renderizar el componente de cambios de color ante eventos de ratón */}
    //     {/* <MouseColor /> */}
    //     {/* Aquí vamos a renderizar el componente Weather */}
    //     {/* <WeatherComponent /> */}
    //     {/* Aquí vamos a renderizar nuestra Lista de tareas */}
    //     <ListaTareas />
    // //   </header>
    // </div> */}
  );
}

export default App;
