import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import Card from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const Carousel = () => {
  // Dynamically change slidesToShow for mobile vs. desktop
  const slidesToShow = useBreakpointValue({ base: 1, md: 2.5 });

  // For the top row (L to R)
  const settingsTop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // single card on mobile, 2.5 on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    arrows: false,
  };

  // For the bottom row (R to L)
  const settingsBottom = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // single card on mobile, 2.5 on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
  };

  return (
    <Box maxW="100%" mx="auto" p={4} overflow="hidden">
      {/* Top Row */}
      <Slider {...settingsTop}>
        <Card
          title="Card 1"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+1"
        />
        <Card
          title="Card 2"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+2"
        />
        <Card
          title="Card 3"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+3"
        />
        <Card
          title="Card 4"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+4"
        />
      </Slider>

      {/* Bottom Row */}
      <Slider {...settingsBottom} style={{ marginTop: "20px" }}>
        <Card
          title="Card 5"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+5"
        />
        <Card
          title="Card 6"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+6"
        />
        <Card
          title="Card 7"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+7"
        />
        <Card
          title="Card 8"
          imageUrl="https://via.placeholder.com/300x150.png?text=Card+8"
        />
      </Slider>
    </Box>
  );
};

export default Carousel;
