//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./NavBar.module.scss";
import logo from "../../assests/logo.jpg";

const cardFront = () => {
    return (
        <div className = {styles.NavBar}>
            <img className = {styles.NavBar__logo} src = {logo}/>
            <h2 className = {styles.NavBar__heading}>MealWorm</h2>
        </div>
    );
}


export default cardFront;

