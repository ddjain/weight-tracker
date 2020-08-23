import { Component } from "react";

import React from 'react';

export default class Footer extends Component{
render(){
    return(
        <footer className="page-footer font-small blue">
            
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                <a href="https://github.com/ddjain/"> Darshan Jain</a>
            </div>
        </footer>
    )
}
}
 