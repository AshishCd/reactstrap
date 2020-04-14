import React from "react";
import { Row, Col, Container, Button } from "reactstrap";


const TwoColumn = ({ title, img, isBtn=true }) => {
  return (
    <div>
      <Container fluid className="padding">
        <Row className="padding">
          <Col md="12" lg="6">
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            {isBtn && <Button type="button" color="primary" className="primary">
              Learn More
            </Button>}
          </Col>
          <Col lg="6">
            <img src={img} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwoColumn;
