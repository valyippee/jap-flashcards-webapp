import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import "./Navigation.css";
import Set from "../sets/Set";
import Create from "./Create";

export default function Navigation() {

    return (
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/create">CREATE</Link></li>
                        <li><Link to="/set">FLASHCARDS</Link></li>
                        <li><Link to="/logout">LOG OUT</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/create" component={Create}/>
                    <Route exact path={["/", "/set"]} component={Set}/>
                </Switch>
            </BrowserRouter>
        )
}
