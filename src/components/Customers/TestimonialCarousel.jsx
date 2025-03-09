import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import Card from './Cards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box maxW="100%" mx="auto" p={4} overflow="hidden">
      <Slider {...settings}>
        <Card title="Card 1" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 2" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 3" imageUrl="https://via.placeholder.com/150" />
      </Slider>
    </Box>
  );
};

export default Carousel;