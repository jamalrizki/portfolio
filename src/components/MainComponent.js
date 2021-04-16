import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Photo from './PhotoComponent';
import CarouselComponent from './HomeComponent';
import Bnw from './BlackandWhiteComponent';
import About from './AboutComponent1';
import Card from './Gallery2component';
import Nature from './NatureComponent';
import Arch from './ArchComponent';
import Sculpture from './SculComponent';
import App from './ContactComponent1';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from '../shared/cards';
import { ABOUTS } from '../shared/about';
import { CAROUSEL } from '../shared/carousel';




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carousel: CAROUSEL,
            cards: CARDS,
            abouts: ABOUTS,
            
           
        };
    }


    render() {

    


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <CarouselComponent cards={this.state.carousel} />}  />
                    <Route exact path='/gallery2' render={() => <Card cards={this.state.cards} />} />
                    <Route exact path='/contactus' component={App} />
                    <Route exact path='/photos' component={Photo} />
                    <Route exact path='/about1' render={() => <About abouts={this.state.abouts} />}  />
                    <Route exact path='/blackandwhite' component={Bnw} />
                    <Route exact path='/nature' component={Nature} />
                    <Route exact path='/arch' component={Arch} />
                    <Route exact path='/sculpture' component={Sculpture} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;