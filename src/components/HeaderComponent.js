import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {Animated} from "react-animated-css";

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <div className="row text-center">
                            <div className="col">
                                <h1 id="font">(Jamal Rizki)</h1>
                                <h4>Photography</h4>
                            </div>  
                        </div>
                        </Animated>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/florfinal1.png" height="40" width="40" alt=" Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen}  navbar >
                            <Nav navbar className="topBotomBordersOut navbar-nav mx-auto text-center">
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/home">
                                         Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/gallery2">
                                         Gallery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/photos">
                                         Photos
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/about1">
                                         About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/contactus">
                                        Contact 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;