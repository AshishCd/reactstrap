import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Images } from "../assets/img";

const ImageData = [
  {
    id: 0,
    src: Images.Background,
    caption: "Bootstrap",
    smallText: "Complete solutions",
    altText: "image bg 1",
  },
  {
    id: 1,
    src: Images.Background2,

    altText: "image bg 3",
  },
  {
    id: 2,
    src: Images.Background3,
    caption: "Slider 3",
    smallText: "Complete solutions",
    altText: "image bg 3",
  },
];

class Slider extends Component {
  state = {
    activeIndex: 0,
    animating: false,
  };

  setAnimating = (val) => {
    this.setState({
      animating: val,
    });
  };

  next = () => {
    const { animating, activeIndex } = this.state;
    if (animating) return;
    const nextIndex =
      activeIndex === ImageData.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    const { animating, activeIndex } = this.state;
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? ImageData.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    const { animating, activeIndex } = this.state;
    if (animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={ImageData}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {ImageData.map((item) => {
            return (
              <CarouselItem
                onExiting={() => this.setAnimating(true)}
                onExited={() => this.setAnimating(false)}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <div className="carousel-caption">
                  <h1 className="display-2">
                    {item.caption ? item.caption : ""}
                  </h1>
                  <h3>{item.smallText ? item.smallText : ""}</h3>
                  <button
                    type="button"
                    className="btn-lg btn btn-outline-light"
                  >
                    VIEW DEMO
                  </button>
                  <button type="button" className="btn-lg btn btn-primary">
                    Get Started
                  </button>
                </div>
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Slider;
