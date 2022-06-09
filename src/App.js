import Main from './pages/main';
import Currency from './pages/currencies';
import Price from './pages/price';

import { Route } from 'react-router-dom';


import './App.css';



function App() {
  return (
   <div className="App">
   <Route>
     Main
   </Route>
   <Route>
     Price
   </Route>
   <Route>
     Currencies
   </Route>
  
  </div>
  );
}

export default App;
