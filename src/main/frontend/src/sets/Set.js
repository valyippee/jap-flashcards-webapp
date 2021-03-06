import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import CardSummary from "./CardSummary";
import Edit from "./Edit";
import "./Set.css";
import SetSummary from "./SetSummary";

export default function Set() {

    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCards = () => {
        if (isLoading) {
            console.log("FETCHING DATA!");
            axios.get("http://localhost:8080/set").then(res => {
                setInfo(res.data);
                setIsLoading(false)
            }).catch(err => console.log(err));
        }

    }

    useEffect(() => {
        fetchCards();
    })

    console.log(info);

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div className="setLayout">
            <SetSummary name={info.name} description={info.description}/>
            <CardSummary cards={info.cards}/>

        </div>

    )
}
