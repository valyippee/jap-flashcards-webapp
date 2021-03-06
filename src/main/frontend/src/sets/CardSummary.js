import React from "react";
import Card from "./Card";
import Field from "./Field";
import "./CardSummary.css";

export default function CardSummary(props) {
    return (
        <div className="summary">
            <div className="section">Flashcards Summary</div>
            <div className="titleSection">
                <Field className={"title"} value={"JAPANESE"}/>
                <Field className={"title"} value={"FURIGANA"}/>
                <Field className={"title"} value={"MEANING"}/>
            </div>
            {props.cards.map((card) => <Card key={card.id} card={card}/>)}
        </div>
    )

}