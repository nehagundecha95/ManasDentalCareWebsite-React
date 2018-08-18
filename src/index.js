import React from 'react';
import ReactDOM from 'react-dom';
import {CoverPage} from "./cover-page";
import {Header} from "./header";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {ManagerRoutes} from "./ManagerRoutes";

ReactDOM.render(
    <div>
        <Header/>
        <CoverPage/>
        <ManagerRoutes/>
    </div>,

    document.getElementById('root')
);