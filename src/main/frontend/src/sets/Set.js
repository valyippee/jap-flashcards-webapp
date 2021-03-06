import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import CardSummary from "./CardSummary";
import Edit from "./Edit";
import "./Set.css";

export default function Set() {

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCards = () => {
        if (isLoading) {
            console.log("FETCHING DATA!");
            axios.get("http://localhost:8080/set").then(res => {
                setCards(res.data);
                if (cards) {setIsLoading(false);}
            }).catch(err => console.log(err));
        }

    }

    useEffect(() => {
        fetchCards();
    })

    console.log(cards);

    return (
        <div className="setLayout">
            <CardSummary cards={cards}/>
            <div className="edit">
                <BrowserRouter>
                    <Link to="/edit"><button className="editButton">EDIT</button></Link>
                    <Switch>
                        <Route exact path="/edit" render={() => <Edit />} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>

    )
}
