//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faOpenHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const CardBack = ({ dishInformation, toggleFav }) => {
    const recipe = dishInformation;
    const editInstructions = (instructions) => instructions.length <= 300 ? instructions : instructions.substr(0,300) + "...";
    const favIcon = dishInformation.isFav ? faHeart : faOpenHeart;

    const handletoggleFav = (event) => {
        event.stopPropagation(); 
        toggleFav(dishInformation)
    }
    
    return (
        <div className = {styles.cardBack}>
            <div className = {styles.cardBack__Recipe}>
                <h3 className = {styles.cardBack__RecipeName}>{recipe.strMeal}</h3>
                <div>
                    <FontAwesomeIcon icon={favIcon} onClick = {handletoggleFav}/>
                </div>
            </div>
            <h5 className = {styles.cardBack__heading}>Instructions</h5>
            <p className = {styles.cardBack__info_instructions}>{editInstructions(recipe.strInstructions)}</p>
            <h5 className = {styles.cardBack__heading}>Ingredients</h5>
            <div className = {styles.cardBack__info_ingredients}>
                {recipe.ingredients.map( ingredient => {
                    return(
                        <div className = {styles.cardBack__info_list}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                            <p>{ingredient}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CardBack;

