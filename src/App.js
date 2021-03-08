import './App.css';

import NavBar from "./components/NavBar";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";



const App = () => {
  return (
    <>
      <NavBar/>
      <div>
        <CardFront/>
        <CardBack/>
      </div>
    </>
  );
}

export default App;
