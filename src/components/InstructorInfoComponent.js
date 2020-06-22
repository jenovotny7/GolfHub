import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderInstructor({instructor}){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={instructor.image} alt={instructor.name} />
                    <CardBody>
                    <CardText>{instructor.description}</CardText>
                </CardBody>
                </Card>
            </div>
        )
    }
    function RenderComments({inscomments}){
       

        if (inscomments){
            return <div key={inscomments.id} className="col-md-6 m-1">
            <h4>Rating</h4>
            {inscomments.map(inscomment=>{
                return(
                    
                    <div> {inscomment.rating}   </div>
                )
            })}
            </div>
        }
        return <div/>
    }
    


    function InstructorInfo(props) {
        if (props.instructor) {
            return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/instructor">Instruction</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.instructor.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.instructor.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderInstructor instructor={props.instructor} />
                    <RenderComments inscomments={props.inscomments} />
                </div>
            </div>
            );
        }
    }
        
       

    export default InstructorInfo;