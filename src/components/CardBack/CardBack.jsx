//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./CardBack.module.scss";
import {recipes} from "../../data/recipes.js";

const cardFront = () => {
    return (
        <div className = {styles.cardBack}>
            <h3 className = {styles.cardBack__RecipeName}>Thai Green Curry</h3>
            <h5 className = {styles.cardBack__heading}>Instructions</h5>
            <p className = {styles.cardBack__info} id = "instructions">Put the potatoes in a pan of boiling water and cook for 5 minutes. Throw in the beans and cook for a further 3 minutes, by which time both should be just tender but not too soft. Drain and put to one side. ...</p>
            <h5 className = {styles.cardBack__heading}>Ingredients</h5>
            <ul className = {styles.cardBack__info} id = "ingredients">
                <li>potatoes,</li>
                <li>green beans,</li>
                <li>sunflower oil</li>
            </ul>
        </div>
    );
}

export default cardFront;

