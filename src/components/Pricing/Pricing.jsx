import { Box, Flex, Heading, Switch, Text } from "@chakra-ui/react";
import Cards from "./PriceCards";

const Pricing = () => {
  return (
    <Box width="full">
      <Box
        w={{ lg: "95%", md: "95%", sm: "100%" }}
        margin="0 auto"
        bgColor="#102315"
        mt={10}
        borderRadius="24px"
      >
        <Box
          textAlign="center"
          color="#ffffff"
          fontFamily="Inter"
          w={{ lg: "60%", md: "60%", sm: "100%" }}
          margin="0 auto"
        >
          <Heading
            fontSize={{ base: "2xl", lg: "3xl", md: "2xl", sm: "xl" }}
            pt={10}
          >
            Pricing That Fits Your Business
          </Heading>
          <Text textStyle={{ lg: "xs", md: "xs", sm: "xs" }} pt={5}>
            Effortless payments,real-time insights, and unmatched security-all
            <br></br>in one place
          </Text>
        </Box>
        <Box
          margin="0 auto"
          w={{ base: "100%", lg: "35%", md: "40%", sm: "100%" }}
          gap={{ base: "10%", lg: "10%", md: "20%" }}
          pt={10}
          pl={{ lg: "10px", md: "10px" }}
          display="flex"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          justifyContent={{ base: "center" }}
          alignItems={{ base: "center" }}
        >
          <Box
            w={{ base: "30%", lg: "30%", md: "30%", sm: "30%" }}
            pb={{ base: "10px" }}
          >
            <Switch.Root sm={{ pl: "3px" }}>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb bgColor="green" />
              </Switch.Control>
              <Switch.Label
                color="white"
                fontSize={{ base: "16px", lg: "xs", md: "xs" }}
              >
                Annaully
              </Switch.Label>
            </Switch.Root>
          </Box>
          <Box
            borderWidth="5px"
            bgColor="#e5f3e8"
            rounded={10}
            w={{ base: "65%", xl: "45%", md: "50%", sm: "40%" }}
          >
            <Text
              color="#00000"
              fontSize={{ base: "16px", lg: "xs", md: "10px", sm: "2px" }}
              bgColor="#e5f3e8"
              textAlign={{ base: "center" }}
            >
              Save 15% with annual billing
            </Text>
          </Box>
        </Box>
        <Cards></Cards>
      </Box>
    </Box>
  );
};

export default Pricing;
