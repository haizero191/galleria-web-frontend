import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../components/pages/Home';
import  Pin from "../components/pages/Pin"
import ReviewHome from '../components/pages/ReviewHome';


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}>
                   
            </Route>
            <Route path="/login" exact component={ReviewHome}>

            </Route>
            <Route path="/search" exact component={Home}>

            </Route>
            <Route path="/pin" exact component={Pin}>
                   
            </Route>
        </Switch>
    )
}
