import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Animated } from "react-animated-css";

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const card = this.props.cards.map((card, index) => {
            return (
                
                    <img src={card.image} alt=""/>
                
            );
        });

        return (

            <Animated animationIn="fadeInUp" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div class="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay transitionTime swipeable={true} fade emulateTouch={true}>
                    <div>
                    {card[0]}
                    </div>
                    <div>
                    {card[1]}
                    </div>
                    <div>
                    {card[2]}
                    </div>
                    <div>
                    {card[3]}
                    </div>
                    <div>
                    {card[4]}
                    </div>
                    <div>
                    {card[5]}
                    </div>
                    <div>
                    {card[6]}
                    </div>
                    <div>
                    {card[7]}
                    </div>
                    <div>
                    {card[8]}
                    </div>
                    <div>
                    {card[9]}
                    </div>
                    <div>
                    {card[10]}
                    </div>
                    <div>
                    {card[11]}
                    </div>
                    <div>
                    {card[12]}
                    </div>
                    <div>
                    {card[13]}
                    </div>
                    <div>
                    {card[14]}
                    </div>
                    <div>
                    {card[15]}
                    </div>
                
                </Carousel>
                </div>
            </Animated>

        );
    }
}

export default CarouselComponent;

