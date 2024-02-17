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
            <h3>First slide label</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%]"
            src="/src/images/comp.png"
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%]"
            src="/src/images/entc.png"
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%] md:object-fill"
            src="/src/images/it.png"
            text="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="px-[10px] h-[30vh] pt-[20px] w-[100%] md:px-[50px] md:h-[50vh] md:pt-[20px] md:w-[100%] md:object-fill"
            src="/src/images/it.png"
            text="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
