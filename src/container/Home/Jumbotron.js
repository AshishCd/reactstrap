import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";

const JumbotronScreen = ({ onButtonClick }) => {
  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <Row>
            <Col xs="12" sm="12" md="9" lg="9" xl="10">
              <p className="lead">
                The box-sizing property allows us to include the padding and
                border in an element's total width and height.
              </p>
            </Col>
            <Col xs="12" sm="12" md="3" lg="3" xl="2">
              <Button
                type="button"
                outline
                size="lg"
                onClick={() => onButtonClick}
              >
                Web Hosting
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default JumbotronScreen;
