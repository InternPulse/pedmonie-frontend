import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features";
import PartnersStat from "../components/Navbar/PartnersStat";
import Steps from "../components/Steps/Steps";

function Home() {
  return (
    <Box>
      <Hero />
      <PartnersStat />
      <Features />
      <Steps />
    </Box>
  );
}

export default Home;
