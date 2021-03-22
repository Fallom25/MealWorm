
import CardList from "./../../components/CardList";
import FeedbackPanel from "../../components/feedback";
import { useEffect, useState } from "react";

const Cookbook = ({ recipes, toggleFav }) => {
    const [favRecipes, setFavRecipes] = useState(recipes.filter(recipe => recipe.isFav));

    // const toggleFav = (recipe) =>{
    //     const i = favRecipes.findIndex(entry => entry.idMeal = recipe.idMeal);

    //     if (i === -1) {
    //         return
    //     }

    //     const copy = [...favRecipes];
    //     favRecipes[i].isFav = !favRecipes[i].isFav;
    //     setFavRecipes(copy);
    // }

    useEffect(() => {
        setFavRecipes(recipes.filter(recipe => recipe.isFav));
    }, [recipes])

    const displayCookbook = favRecipes.length
        ? <CardList dishList={favRecipes} toggleFav={toggleFav}/>
        : <FeedbackPanel title={"No Recipes Favourited"} description={"You have no Favourites, Please select some of your favourite recipes"}/>
    
        
    return (
        <>
            {displayCookbook}
        </>
    ) 
}

export default Cookbook;