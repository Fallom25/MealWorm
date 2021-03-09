import styles from './App.module.scss';

import NavBar from "./components/NavBar";
// import CardFront from "./components/CardFront";
// import CardBack from "./components/CardBack";
import recipes from "./data/recipes.js";
import List from "./components/List";



const App = () => {
  return (
    <>
      <NavBar/>
      <div className = {styles.App__layout}>
        <List dishList = {recipes}/>
      </div>
    </>
  );
}

export default App;
