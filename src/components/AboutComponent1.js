import React, { Component } from 'react';
import { Animated } from "react-animated-css";




class Abouts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        
        const about = this.props.abouts.map(about => {
            return (
                <div key={about.id} className="container">
                    <div className="row align-items-center ">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img className="d-block m-auto " width="70%" src={about.image} alt="Card cap"/>
                        </div>
                        <div className="col-12 col-md-6 text-center mt-1">
                            <h3>{about.name}</h3>
                            <p>{about.blurb}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <Animated animationIn="fadeInUp" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                {about}
            </Animated>
        );
    }
}

export default Abouts;