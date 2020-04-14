import React from "react";
import { Row, Col, Container } from "reactstrap";

const Welcome = () => {
  return (
    <div>
      <Container fluid className="padding">
        <Row className="welcome text-center">
          <Col className="col-12">
            <h1 className="display-4">Built with Ease</h1>
          </Col>
          <hr />
          <Col className="col-12">
            <p className="lead">
              The code below ensures that all elements are sized in this more
              intuitive way. Many browsers already use box-sizing: border-box;
              for many form elements (but not all - which is why inputs and text
              areas look different at width: 100%;).
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
