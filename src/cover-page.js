import React from 'react';

export class CoverPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                             alt="First slide"/>
                    </div>
                </div>
            </div>
        );
    }
}
