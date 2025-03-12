import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features";
import PartnersStat from "@/components/Navbar/PartnersStat";
import Customers from "@/components/Customers/Customers";
import Pricing from "@/components/Pricing/Pricing";
import ApiDocs from "@/components/ApiDocs/ApiDocs";
import Faqs from "@/components/Faqs/Faqs";
import { Box } from "@chakra-ui/react";

function LandingHome() {
  return (
    <Box>
      <Hero />
      <PartnersStat />
      <Features />
      <Customers />
      <Pricing />
      <ApiDocs />
      <Faqs />
    </Box>
  );
}

export default LandingHome;
