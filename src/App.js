

import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import Nav from './components/Nav';

//commponent libraries

import { Route } from 'react-router-dom';

//styles
import './App.css';



function App() {
  return (
   <div className="App">
     <Nav />
   <Route exact path="/">
     <Main />
   </Route>
   <Route path="/currencies">
     <Currencies />
   </Route>
   <Route path="/price/:symbol">
     <Price />
   </Route>
   
  </div>
  );
}

export default App;
