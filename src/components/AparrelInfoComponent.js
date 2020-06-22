import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderAparrel({aparrel}){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={aparrel.image} alt={aparrel.name} />
                    <CardBody>
                    <CardText>{aparrel.description}</CardText>
                </CardBody>
                </Card>
            </div>
        )
    }
    function RenderAcomments({acomments}){
       

        if (acomments){
            return <div key={acomments.id} className="col-md-6 m-1">
            <h4>Available</h4>
            {acomments.map(acomment=>{
                return(
                    
                    <div> {acomment.text}  </div>
                )
            })}
            </div>
        }
        return <div/>
    }
    


    function AparrelInfo(props) {
        if (props.aparrel) {
            return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Aparrel</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.aparrel.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.aparrel.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderAparrel aparrel={props.aparrel} />
                    <RenderAcomments acomments={props.acomments} />
                </div>
            </div>
            );
        }
    }
        
       

    export default AparrelInfo;