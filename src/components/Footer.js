import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Images } from "../assets/img";

class FooterScreen extends Component {
  render() {
    return (
      <div>
        <Container fluid className="padding">
          <Row className="text-center">
            <Col md="4">
              <img src={Images.Logo2} />
              <hr className="light" />
              <p>8087835010</p>
              <p>asurve18@yahoo.com</p>
              <p>Mumbai, 401305</p>
            </Col>
            <Col md="4">
              <hr className="light" />
              Our Hours
              <hr className="light" />
              <p>Mon-Fri : 10am to 6pm</p>
              <p>Saturday: 9am to 3pm</p>
              <p>Sunday: off</p>
            </Col>
            <Col md="4">
              <hr className="light" />
              Service Area
              <hr className="light" />
              <p>8888888888</p>
              <p>asurve18@yahoo.com</p>
              <p>Mumbai, 401305</p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col className="col-12">
              <hr className="light-100" />
              <h5>&copy; ashish surve 2019. All Rights Reserved.</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FooterScreen;
