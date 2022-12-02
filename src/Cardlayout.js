import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function  Cardlayout(data) {
  return (
 
    <Card style={{ width: '20rem'  }}  className="col-6">
      <Card.Img variant="top" src={data.second.image} />
      <Card.Body>
        <Card.Title>{data.second.title}</Card.Title>
        <Card.Text>
          {data.second.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  
  );
}

export default Cardlayout;