import React, { Component } from "react";
import Slider from "../../components/Slider";
import Jumbotron from "./Jumbotron";
import Welcome from "./Welcome";
import ThreeCoumn from "./ThreeColumn";
import TwoColumn from "./TwoColumn";
import MeetTheTeam from "./MeetTeam";
import Social from "./Social";
import { Images } from "../../assets/img";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Jumbotron />
        <Welcome />
        <ThreeCoumn />
        <TwoColumn title={"If you build it..."} img={Images.Desktop} />
        <MeetTheTeam />
        <TwoColumn title={"Our Philosophy"} img={Images.Mac} isBtn={false} />
        <Social />
      </div>
    );
  }
}

export default Home;
