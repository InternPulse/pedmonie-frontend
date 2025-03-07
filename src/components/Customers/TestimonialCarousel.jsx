import { Box, Text, Image, VStack, Icon } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ text, name, role, image }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      bg="white"
      maxW="sm"
      textAlign="center"
    >
      <VStack spacing={3} align="center">
        <Icon as={FaQuoteLeft} color="green.400" boxSize={6} />
        <Text fontSize="md" color="gray.700">{text}</Text>
        <VStack align="center" spacing={1}>
          <Image src={image} alt={name} borderRadius="full" boxSize="40px" objectFit="cover" />
          <Text fontSize="md" fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">{role}</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

TestimonialCard.defaultProps = {
  text: "Pedmonie made it easier to collect payments from my customers worldwide!",
  name: "John Doe",
  role: "CEO and Co-founder of XYZ Company",
  image: "https://via.placeholder.com/40",
};

const TestimonialCarousel = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </Slider>
  );
};

TestimonialCarousel.defaultProps = {
  testimonials: [],
};

export default TestimonialCarousel;
