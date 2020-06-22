import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderAparrelItem({aparrel}) {
    return (
        <Card>
            <Link to={`/aparrel/${aparrel.id}`}>
                <CardImg width="100%" src={aparrel.image} alt={aparrel.name} />
                <CardImgOverlay>
                    <CardTitle>{aparrel.name}</CardTitle>
                    
                    
                </CardImgOverlay>
                
            </Link>
        </Card>
    );
}

function Aparrel(props) {

    const aparrel = props.aparrels.map(aparrel => {
        return (
            <div key={aparrel.id} className="col-md-5 m-1">
                <RenderAparrelItem aparrel={aparrel} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Aparrel</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Aparrel</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {aparrel}
            </div>
        </div>
    );
}

export default Aparrel;