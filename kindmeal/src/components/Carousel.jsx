import { Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomePageCarousel({carouselImages}){
    const style= {
        width:'80vw',
        height:'40vh',
        margin:'0 auto',
        boxShadow:' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    }
    return (
        <div style={style}>
        <Flex justifyContent='space-between' >
             <Image  ml='3' w='26vw'  h='39vh' src='https://www.kindmeal.my/photos/deal/7/708-4923-l.jpg '  />
            <IndividualIntervalsExample src1={carouselImages.src1} src2={carouselImages.src2} src3={carouselImages.src3} src4={carouselImages.src4} src5={carouselImages.src5} />
           
        </Flex>
        
        
        </div>
    )
}
// import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample({src1,src2,src3,src4,src5  }) {
    // console.log(h)
  return (
    <Carousel  >
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={src1}
          alt="First slide"
          style={{
            width:'40vw',
            height:'38vh'
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block"
          alt="second slide"
          src={src2}
          style={{
            // width:{w},
            width:'40vw',
            height:'38vh'
          }} />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block "
          src={src3}
          alt="Third slide"
          style={{
            // width:{w},
            width:'40vw',
            height:'38vh'

          }}
        />
        </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block"
          src={src4}
          alt="Fourth slide"
          style={{
            // width:{w},
            width:'40vw',
            height:'38vh'

          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          src={src5}
          alt="Fifth slide"
          style={{
            // width:{w},
            width:'40vw',
            height:'38vh'

          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

// export  ;
// render(<ControlledCarousel />);
export { HomePageCarousel , IndividualIntervalsExample } ;