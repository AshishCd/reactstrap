import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

const SocialIcon = [
  {
    id: 0,
    icon: "fab fa-facebook",
  },
  {
    id: 1,
    icon: "fab fa-twitter",
  },
  {
    id: 2,
    icon: "fab fa-instagram",
  },
  {
    id: 3,
    icon: "fab fa-google-plus-g",
  },
  {
    id: 4,
    icon: "fab fa-youtube",
  },
];

const Social = () => {
  return (
    <div>
      <hr className="my-4" />
      <Container fluid className="padding">
        <Row className="padding text-center">
          <Col className="col-12">
            <h2>Connect</h2>
          </Col>
          <Col className="social padding col-12">
            {SocialIcon.map((icon) => {
              return (
                <Link to="" key={icon.id}>
                  <i className={`${icon.icon}`} />
                </Link>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Social;
