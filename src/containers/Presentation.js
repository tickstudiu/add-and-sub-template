import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Number from '../components/Number';

const Presentation = (props) => {
    const { number, handleAddNumber, handleRemoveNumber, handleSubNumber } = props;
  return(
      <Container fluid>
          <Row>
              <Col className="bg-light p-5">
                  <div className="text-center">
                      <h1 className="display-4">number : {number}</h1>
                      <div className="d-inline-block">
                          <button className="btn btn-outline-primary mr-3 text-uppercase" onClick={handleSubNumber}>sub number</button>
                          <button className="btn btn-outline-primary mr-3 text-uppercase" onClick={handleAddNumber}>add number</button>
                          <button className="btn btn-outline-primary text-uppercase" onClick={handleRemoveNumber}>set zero number</button>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>
  )
};

export default Number(Presentation);