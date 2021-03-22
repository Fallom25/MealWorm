//Rescipe card front
//includes Img, Heading, Origin
//also included flexed links for full recipe and youtube

import styles from "./NavBar.module.scss";

import SearchBar from "../SearchBar";

import logo from "../../assests/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavBar = ({ setSearch }) => {
    return (
        <>
            <div className = {styles.NavBar}>
                <Link to="/">
                    <div className = {styles.NavBar_brand}>
                        <img alt = "MealWorm logo" className = {styles.NavBar_brand__logo} src = {logo}/>
                        <h2 className = {styles.NavBar_brand__heading}>MealWorm</h2>
                    </div>
                </Link>
                <div className = {styles.NavBar_brand}>
                <SearchBar setSearch={setSearch}/>
                <Link to="cookbook">
                    <FontAwesomeIcon icon={faBookOpen}/>
                </Link>
                </div>

            </div>
        </>
    );
}

export default NavBar;

