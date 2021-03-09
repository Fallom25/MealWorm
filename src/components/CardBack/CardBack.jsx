//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./CardBack.module.scss";

const CardBack = ({ dishInformation }) => {
    const recipe = dishInformation;

    const editInstructions = (instructions) => instructions.length <= 300 ? instructions : instructions.substr(0,300) + "...";

    return (
        <div className = {styles.cardBack}>
            <h3 className = {styles.cardBack__RecipeName}>{recipe.strMeal}</h3>
            <h5 className = {styles.cardBack__heading}>Instructions</h5>
            <p className = {styles.cardBack__info_instructions}>{editInstructions(recipe.strInstructions)}</p>
            <h5 className = {styles.cardBack__heading}>Ingredients</h5>
            <ul className = {styles.cardBack__info_ingredients}>
                {recipe.ingredients.map( ingredient => <li>{ingredient}</li>)}
            </ul>
        </div>
    );
}

export default CardBack;

