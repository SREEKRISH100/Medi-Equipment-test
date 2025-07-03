import Carousel from 'react-bootstrap/Carousel';

import img1 from './images/Screenshot (40).png';
import img2 from './images/Screenshot (34).png';
import img3 from './images/med.jpg';

function Slider() {
  return (
    <Carousel>
    
      <Carousel.Item interval={1500}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={img1} style={{width:'100%',height:'547px'}}/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img2} style={{width:'100%',height:'547px'}}/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img3} style={{width:'100%',height:'547px'}}/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;