import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderInstructorItem({instructor}) {
    return (
        <Card>
            <Link to={`/instructor/${instructor.id}`}>
                <CardImg width="100%" src={instructor.image} alt={instructor.name} />
                <CardImgOverlay>
                    <CardTitle>{instructor.name}</CardTitle>
                    
                    
                </CardImgOverlay>
                
            </Link>
        </Card>
    );
}

function Instructor(props) {

    const instructor = props.instructors.map(instructor => {
        return (
            <div key={instructor.id} className="col-md-5 m-1">
                <RenderInstructorItem instructor={instructor} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Instruction</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Instruction</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {instructor}
            </div>
        </div>
    );
}

export default Instructor;