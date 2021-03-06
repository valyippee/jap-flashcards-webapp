import React from "react";
import "./CardSummary.css";
import TextareaAutosize from "react-autosize-textarea";

export default function Field(props) {

    return (
        <TextareaAutosize className={props.className ? props.className : "field"}
               disabled={true}
               value={props.value}/>
    )

}