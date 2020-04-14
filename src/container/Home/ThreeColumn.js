import React from "react";
import { Row, Col, Container } from "reactstrap";

const iconSet = [
  {
    id: 0,
    icon: "fas fa-code",
    heading: "HTML",
    text: "Since the result of using the box-sizing: border-box;",
  },
  {
    id: 1,
    icon: "fas fa-bold",
    heading: "BOOTSTRAP",
    text: "Since the result of using the box-sizing: border-box;",
  },
  {
    id: 3,
    icon: "fab fa-css3",
    heading: "CSS 3",
    text: "Since the result of using the box-sizing: border-box;",
  },
];

const Icons = ({ col }) => {
  return iconSet.map((icon) => {
    return (
      <Col
        xs={col && iconSet.length === icon.id ? "" : "12"}
        sm={iconSet.length === icon.id ? `${col}` : "6"}
        md="4"
        key={icon.id}
      >
        <i className={`${icon.icon}`}></i>
        <h3>{icon.heading}</h3>
        <p>{icon.text}</p>
      </Col>
    );
  });
};

const ThreeColumn = () => {
  return (
    <div>
      <Container fluid className="padding">
        <Row className="text-center padding">
          <Icons col={12} />
        </Row>
        <hr className="my-4" />
      </Container>
    </div>
  );
};

export default ThreeColumn;
