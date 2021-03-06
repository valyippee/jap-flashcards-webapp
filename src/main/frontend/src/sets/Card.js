import React from "react";
import Field from "./Field";
import "./CardSummary.css";

export default function Card(props) {

    return (
        <div className="card">
            <Field value={props.card.japanese} />
            <Field value={props.card.furigana} />
            <Field value={"blehhhhhhhhhhh oohohohohoohooooooooooooooooooooooooooooooooooooo"} />
            {/*<Field value={props.card.english} />*/}
        </div>
    )
}