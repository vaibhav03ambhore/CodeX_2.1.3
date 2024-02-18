import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%]"
            src="/src/images/welcome.png"
            text="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%]"
            src="/src/images/Asset.jpg"
            text="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%]"
            src="/src/images/Home.jpg"
            text="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%] md:object-fill"
            src="/src/images/Bike.jpg"
            text="Fourth slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%] md:object-fill"
            src="/src/images/Bike.jpg"
            text="Fifth slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
