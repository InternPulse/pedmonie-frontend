import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features";
import PartnersStat from "../components/Navbar/PartnersStat";
import Steps from "../components/Steps/Steps";
import Customers from "../components/Customers/Customers";
import Pricing from "../components/Pricing/Pricing";
import ApiDocs from "../components/ApiDocs/ApiDocs";
import Faqs from "../components/Faqs/Faqs";

function Home() {
  return (
    <Box>
      <Hero />
      <PartnersStat />
      <Features />
      {/* <Steps /> */}
      <Customers />
      <Pricing />
      <ApiDocs />
      <Faqs />
    </Box>
  );
}

export default Home;
