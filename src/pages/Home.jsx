import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features";
import PartnersStat from "../components/Navbar/PartnersStat";

function Home() {
  return (
    <Box>
      <Hero />
      <PartnersStat />
      <Features />
    </Box>
  );
}

export default Home;
