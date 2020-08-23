import { Component } from "react";

import React from 'react';

export default class Header extends Component{
render(){
    return(
        <div className="jumbotron">
            <h1>Weight Tracker</h1>
            <p>Track your daily weight with Weight Tracker, when you are connected to internet or not connected to internet.</p>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                <a className="nav-link active" href="/home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/detail">Detail</a>
                </li>
            </ul>
        </div>
    )
}
}