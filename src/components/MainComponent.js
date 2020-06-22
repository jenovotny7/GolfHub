import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Directory from './DirectoryComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Aparrel from './AparrelComponent';
import AparrelInfo from './AparrelInfoComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Instructor from './InstructorComponent';
import InstructorInfo from './InstructorInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { INSTRUCTORS } from '../shared/instructors';
import { APARRELS } from '../shared/aparrels';
import { ACOMMENTS } from '../shared/acomments';
import { INSCOMMENTS } from '../shared/inscomments';




class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            aparrels: APARRELS,
            instructors: INSTRUCTORS,
            acomments: ACOMMENTS,
            inscomments: INSCOMMENTS


        };
    }
    render() {

        const HomePage = () => {
            return (
                <Home 
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }
        
        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        }  
        
        const InstructorWithId = ({match}) => {
            return (
                <InstructorInfo 
                    instructor={this.state.instructors.filter(instructor => instructor.id === +match.params.instructorId)[0]}
                    inscomments={this.state.inscomments.filter(inscomment => inscomment.instructorId === +match.params.instructorId)}
                />
            );
        };    

        const AparrelWithId = ({match}) => {
            return (
                <AparrelInfo 
                    aparrel={this.state.aparrels.filter(aparrel => aparrel.id === +match.params.aparrelId)[0]}
                    acomments={this.state.acomments.filter(acomment => acomment.aparrelId === +match.params.aparrelId)}
                />
            );
        };    


        return (
            <div>
                <Header />
                <Switch>
                    
                <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/instructor' render={() => <Instructor instructors={this.state.instructors} />} /> 
                    <Route exact path='/aparrel' render={() => <Aparrel aparrels={this.state.aparrels} />} /> 
                    <Route path='/instructor/:instructorId' component={InstructorWithId} />
                    <Route path='/aparrel/:aparrelId' component={AparrelWithId} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} /> 
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
                </div>
            );
        }
    }
    

export default Main;