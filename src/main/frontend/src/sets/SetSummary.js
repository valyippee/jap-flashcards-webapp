import React from "react";
import "./SetSummary.css";
import TextareaAutosize from "react-autosize-textarea";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import CardSummary from "./CardSummary";

export default function SetSummary(props) {
    return (
        <div>
            <div className="setSummaryLayout">
                <div className="setMain">
                    <TextareaAutosize className="setTitle">{props.name.toUpperCase()}</TextareaAutosize>
                    <TextareaAutosize className="setDescription" value={props.description} disabled={true}/>
                </div>
                <div className="setOthers">
                    <span>Last Modified:</span>
                    <span>Created On:</span>
                    <span>Number of Cards:</span>
                </div>
            </div>
            <div>
                <hr style={{color: "grey"}}/>
            </div>
            <div>
                <BrowserRouter>
                    <div className="tabs">
                        <span className="summaryTab"><Link className="summaryLink" to="./summary">Flashcards Summary</Link></span>
                        <span className="memoTab"><Link className="memoLink"to="./memorize">Memorize</Link></span>
                    </div>
                    <Switch>
                        <Route exact path="/set/summary" component={CardSummary}/>
                        {/*<Route exact path="set/memorize" component={Memorize} />*/}
                    </Switch>
                </BrowserRouter>
            </div>

        </div>


    )
}