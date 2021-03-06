import React from "react";
import "./Create.css";
import TextareaAutosize from "react-autosize-textarea";

export default function Create() {

    return (
        <div>
            <h2>CREATE SET</h2>

            <div className="setDetails">
                <div>
                    <h3>TITLE</h3>
                    <TextareaAutosize className="titleInput"/>
                </div>
                <div>
                    <h3>DESCRIPTION</h3>
                    <TextareaAutosize className="descriptionInput"/>
                </div>
            </div>
            <div className="flashcards">
                <h3>FLASHCARDS</h3>
            </div>

        </div>
    )

}