import {
    Switch,
    Route,
  } from "react-router-dom";

import NotFound from "../../components/notfound";
import Cookbook from "../cookbook";
import Dashboard from "../dashboard";
import Home from "../Home";
import Favourites from "../Favourites";
import Login from "../Login";

const Routes = ({ recipes, toggleFav}) => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard recipes={recipes} toggleFav={toggleFav}/>
            </Route>
            <Route path="/cookbook">
                <Cookbook recipes={recipes} toggleFav={toggleFav}/>
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/favourite">
                <Favourites />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;