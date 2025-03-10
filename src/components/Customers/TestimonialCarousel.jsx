import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import Card from './Cards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const Carousel = () => {
  const settingsTop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, // Showing 2 and a half cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false, // Left to right
    arrows: false,
  };

  const settingsBottom = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, // Showing 2 and a half cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true, // Right to left
    arrows: false,
  };

  return (
    <Box maxW="100%" mx="auto" p={4} overflow="hidden">
      {/* Top Row */}
      <Slider {...settingsTop}>
        <Card title="Card 1" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 2" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 3" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 4" imageUrl="https://via.placeholder.com/150" />
      </Slider>

      {/* Bottom Row */}
      <Slider {...settingsBottom} style={{ marginTop: '20px' }}>
        <Card title="Card 5" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 6" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 7" imageUrl="https://via.placeholder.com/150" />
        <Card title="Card 8" imageUrl="https://via.placeholder.com/150" />
      </Slider>
    </Box>
  );
};

export default Carousel;
