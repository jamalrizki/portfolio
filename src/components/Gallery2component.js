import React, { Component } from 'react';
import { Card, CardImg,  Button, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const card = this.props.cards.map(card => {
            return (
                <Card className="mb-3 mt-5 text-center">
                    <CardImg top width="100%" src={card.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="align-items-center" tag="h5">{card.title}</CardTitle>
                        <Link to={card.link}><Button className="btn-store">{card.button}</Button></Link>
                    </CardBody>
                </Card>
            );
        });

        return (

            <div className="container">
                <Animated animationIn="fadeInUp" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="row">
                        <div key={card.id} className="col-xs-12 col-md-6">
                            {card[0]}
                        </div>
                        <div key={card.id} className="col-xs-12 col-md-6">
                            {card[1]}
                        </div>
                        <div key={card.id} className="col-xs-12 col-md-6">
                            {card[2]}
                        </div>
                        <div key={card.id} className="col-xs-12 col-md-6">
                            {card[3]}
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default Cards;