//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./CardFront.module.scss";
import image from "../../assests/greenCurry.jpg";

const cardFront = () => {
    return (
        <div className = {styles.cardFront}>
            <img className = {styles.cardFront__img} src = {image}/>
            <div className = {styles.cardFront__info}>
            <h3 className = {styles.cardFront__RecipeName}>Thai Green Curry</h3>
            <p className = {styles.cardFront__Origin}>Thai</p>
            </div>
            <div className = {styles.cardFront__links}>
                <a href="#" className = {styles.cardFront__linksStyles}>Full recipe</a>
                <a href="#" className = {styles.cardFront__linksStyles}>Youtube</a>
            </div>
        </div>
    );
}


export default cardFront;

