import React from 'react';
import { Card, CardImg,CardImgOverlay, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item}) {
    return (
        <Card>
            
            <CardImg  src={item.image} alt={item.name}/>
           
            <CardImgOverlay>
                    <CardTitle>{item.date}</CardTitle>
                    
                    
                </CardImgOverlay>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            
                
            </CardBody>
        
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                    <Link to="/directory" className="btn btn-success btn-lg btn-block">View</Link>
                    
                    
                    
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                    <Link to="/instructor" className="btn btn-success btn-lg btn-block">View</Link>
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                    <Link to="/aparrel" className="btn btn-success btn-lg btn-block">View</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;   