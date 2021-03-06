import React from "react";
import Card from "./Card";
import Field from "./Field";
import "./CardSummary.css";
import Edit from "./Edit";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

export default function CardSummary(props) {
    return (
        <div className="summary">
            <span className="section">Flashcards Summary</span>
            <div className="titleSection">
                <Field className={"title"} value={"JAPANESE"}/>
                <Field className={"title"} value={"FURIGANA"}/>
                <Field className={"title"} value={"MEANING"}/>
                <div className="edit">
                    <BrowserRouter>
                        <Link to="/edit"><button className="editButton">EDIT</button></Link>
                        <Switch>
                            <Route exact path="/edit" render={() => <Edit />} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
            {props.cards.map((card) => <Card key={card.id} card={card}/>)}
        </div>
    )

}