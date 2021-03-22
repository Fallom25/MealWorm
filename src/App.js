  
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Routes from './containers/routes';

import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipes, cleanRecipes } from './services/recipes.js';

const App = () => {
  const [recipeSearch, setRecipeSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  const updateRecipes = async () => {
    const newRecipes = await getRecipes('');
    const cleanedRecipes = cleanRecipes(newRecipes);
    setRecipes(cleanedRecipes);
  }

  const updateDisplayedRecipes = () => {
    setDisplayedRecipes(recipes.filter(r => {
      return r.strMeal.toLowerCase().includes(recipeSearch.toLowerCase());
    }));
  }

  const toggleFav = (recipe) => {
    setRecipes(recipes.map(r => {
      return r.idMeal !== recipe.idMeal 
        ? r : { ...r, isFav: !r.isFav };
    }));
  }

  useEffect(() => {
    updateRecipes();
  }, []);

  useEffect(() => {
    updateDisplayedRecipes();
  }, [recipeSearch, recipes]);

  return (
    <>
      <div className={styles.App}>
        <Router>
          <NavBar setSearch={setRecipeSearch} />
          <div className={styles.App_content}>
            <Routes recipes={displayedRecipes} toggleFav={toggleFav} />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;