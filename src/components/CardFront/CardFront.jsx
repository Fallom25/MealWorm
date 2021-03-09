//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./CardFront.module.scss";

const CardFront = ({ dishInformation }) => {
    const recipe = dishInformation;
    
    return (
        <div className = {styles.cardFront}>
            <img className = {styles.cardFront__img} src = {recipe.strMealThumb}/>
            <div className = {styles.cardFront__info}>
            <h3 className = {styles.cardFront__RecipeName}>{recipe.strMeal}</h3>
            <p className = {styles.cardFront__Origin}>{recipe.strArea}</p>
            </div>
            <div className = {styles.cardFront__links}>
                <a href = {recipe.strSource} className = {styles.cardFront__linksStyles}>Full recipe</a>
                <a href = {recipe.strYoutube} className = {styles.cardFront__linksStyles}>Youtube</a>
            </div>
        </div>
    );
}


export default CardFront;

