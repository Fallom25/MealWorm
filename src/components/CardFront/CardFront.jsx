//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./CardFront.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


const CardFront = ({ dishInformation }) => {
    const recipe = dishInformation;
    
    return (
        <div className = {styles.cardFront}>
            <img alt = {recipe.strMeal} className = {styles.cardFront__img} src = {recipe.strMealThumb}/>
            <div className = {styles.cardFront__info}>
                <h3 className = {styles.cardFront__RecipeName}>{recipe.strMeal}</h3>
                <div className = {styles.cardFront__Origin}>
                    <FontAwesomeIcon icon = {faGlobeAsia}/>
                    <p >{recipe.strArea}</p>
                </div>
            </div>
            <div className = {styles.cardFront__links}>
                <a onClick ={(event) => event.stopPropagation()} target = {'blank'} href = {recipe.strSource} className = {styles.cardFront__linksStyles}>Full recipe</a>
                <a onClick ={(event) => event.stopPropagation()} target = {'blank'} href = {recipe.strYoutube} className = {styles.cardFront__linksStyles}><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
}


export default CardFront;

