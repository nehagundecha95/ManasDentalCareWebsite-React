import React from 'react';
import {CoverPage} from "./cover-page";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutUs} from "./about_us";
import {Services} from "./services";
import {Home} from "./homepage";
import {ContactUs} from "./contact_us";

export class Header extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to={`/home`} onClick={Home}>Manas Dental Care</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={`/home`} onClick={Home}>Home
                                        {/*<span className="sr-only">(current)</span>*/}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/about_us`} onClick={AboutUs}>About Us</Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link">Meet the team</a>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/services`} onClick={Services}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/contact_us`} onClick={ContactUs}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Router>
            </div>

        );
    }
}