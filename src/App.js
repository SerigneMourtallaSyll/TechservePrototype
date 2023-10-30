import './App.css';
// import TodoList from './TodoList';
// import { TodoListEx } from './TodoListEx';
import Header from './Components/Header';
import Service from './Components/Service';
import News from './Components/News';
import Temoignage from './Components/Temoignage';
import SingUp from './Components/SingUp';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <News />
      <Temoignage />
      <SingUp />
      <Footer />
    </div>
  );
}

export default App;
