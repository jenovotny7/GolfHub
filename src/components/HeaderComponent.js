import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                <Navbar dark sticky=" fixed-top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/GH.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Courses
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/instructor">
                                        <i className="fa fa-info fa-lg" /> Instruction
                                    </NavLink>
                                </NavItem>
                                
                                    
                                <NavItem>
                                    <NavLink className="nav-link" to="/aparrel">
                                        <i className="fa fa-info fa-lg" /> Aparrel
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>
                
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Welcome to GolfHub</h1>
                                <h2></h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                

            </React.Fragment>
        );
    }
}

export default Header;