import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const RenderExample = (props) => {
  return (
      
    <CardDeck>
        
        <div className="col-xs-12 col-md-6">
      <Card className="mb-3">
        <CardImg top width="100%" src="/assets/images/5.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className="btn-store">Button</Button>
        </CardBody>
      </Card>
      
      <Card className="mb-3">
        <CardImg top width="100%" src="/assets/images/5.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className="btn-store">Button</Button>
        </CardBody>
      </Card>
      </div>
      <div className="col-xs-12 col-md-6">
      <Card className="mb-3">
        <CardImg top width="100%" src="/assets/images/5.jpg" alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className="btn-store">Button</Button>
        </CardBody>
      </Card>
      
      <Card className="mb-3">
        <CardImg top width="100%" src="/assets/images/5.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className="btn-store">Button</Button>
        </CardBody>
      </Card>
      </div>
      
    </CardDeck>
  );
};



function Example(props) {
   
        return (
            <div className="container">
                <div className="row">
                    <RenderExample example={props.example} />
                </div>
            </div>
        );
        }
  

export default Example;