import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Images } from "../../assets/img";

const TeamStats = [
  {
    id: 0,
    title: "John Doe",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
    teamImg: Images.Team1,
  },
  {
    id: 1,
    title: "Marry Doe",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
    teamImg: Images.Team2,
  },
  {
    id: 3,
    title: "Tosky Doe",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
    teamImg: Images.Team3,
  },
];

const Team = () => {
  return TeamStats.map((team) => {
    return (
      <Col md="4" sm="4" xs="12" key={team.id}>
        <Card>
          <CardImg top width="100%" src={team.teamImg} alt="Card image cap" />
          <CardBody>
            <CardTitle>{team.title}</CardTitle>
            <CardText>{team.text}</CardText>
            <Button outline>Button</Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
};

const MeetTheTeam = () => {
  return (
    <div>
      <Container fluid className="padding">
        <Row className="welcome text-center">
          <Col>
            <h1 className="display-4">Meet the Team</h1>
          </Col>
          <hr />
        </Row>
      </Container>
      <Container fluid className="padding">
        <Row className="padding">
          <Team />
        </Row>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
