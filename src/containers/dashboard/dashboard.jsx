import CardList from "../../components/CardList";
// import recipes from "../../data/recipes";
// import { useState, useEffect, useReducer } from "react";


const Dashboard = ({ recipes, toggleFav }) => {
    // const [stateRecipes, setStateRecipes] = useState(recipes);
    // const [displayRecipes, setDisplayRecipes] = useState([]);

    // // const [stateRecipes, dispatchStateRecipes] = useReducer(recipe => {
    // //     return recipe.strMeal.toLowerCase().includes(searchString.toLowerCase());
    // // }, recipes);

    // useEffect(() => {
    //     setDisplayRecipes(stateRecipes.filter(recipe => {
    //         return recipe.strMeal.toLowerCase().includes(searchString.toLowerCase());
    //     }));
    // },[searchString])


    // const toggleFav = (recipe) =>{
    //     const i = stateRecipes.findIndex(entry => entry.idMeal = recipe.idMeal);

    //     if (i === -1) {
    //         return
    //     }

    //     const copy = [...stateRecipes];
    //     stateRecipes[i].isFav = !stateRecipes[i].isFav;
    //     setStateRecipes(copy);
    // }

    return <CardList dishList={recipes} toggleFav={toggleFav}/>
}

export default Dashboard;