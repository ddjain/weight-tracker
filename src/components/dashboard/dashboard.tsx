import { Component } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "../../pages/homePage/homePage";
import DetailPage from "../../pages/detailPage/detailPage";

export default class Dashboard extends Component{
render(){
    return(
        <Router >
        <div>
           <Switch>
           <Route exact path="/">
              <Redirect to="/home"/>
            </Route>  
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/detail" component={DetailPage} />
          </Switch>
         </div>
      </Router>

    )
}
}
 