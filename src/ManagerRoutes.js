import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutUs} from "./about_us";
import {Services} from "./services";
import {Home} from './homepage';
import {ContactUs} from "./contact_us";

export class ManagerRoutes extends React.Component{
    render(){
        return(

            <Router>
                <div>
                    <Route path="/home" component={Home}>

                    </Route>
                    <Route path="/about_us" component={AboutUs}>

                    </Route>
                    <Route path="/services" component={Services}>

                    </Route>
                    <Route path="/contact_us" component={ContactUs}>

                    </Route>
                </div>
            </Router>
        );
    }
}