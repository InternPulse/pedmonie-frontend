import { useState } from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import Payment from "./payment-subcomponents/Payment";
import SinglePayment from "../assets/SinglePayment.svg";
import RecurringPayment from "../assets/RecurringPayment.svg";
import PaymentLink from "../assets/PaymentLink.svg";
//import Cancel from "../assets/Cancel.svg";
import { useNavigate } from "react-router-dom";
import {
  DialogBody,
  DialogContent,
  DialogRoot,
} from "../components/ui/dialog";

function SelectPayment() {
  const [selected, setSelected] = useState(""); //Keeps track of the selected payment type
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!selected) {
      setIsDialogOpen(true);
      return;
    }

    navigate(`/create-payment-link`);
  };

  return (
    <Box bg="gray.100" minH="100vh" pt="50px" pb="100px">
      {/* <Box borderBottom="2px solid" borderColor="gray.300" h="55px" px="47px">
        <Image src={Cancel} alt="Payment Option" w="32px" cursor="pointer" />
      </Box> */}
      <Box>
        <Text
          color="gray.800"
          fontWeight="medium"
          textAlign="center"
          pt="89px"
          pb="71px"
          fontSize={["14px", "20px", "26px", "32px"]}
        >
          Select a payment type to continue
        </Text>

        <Flex wrap="wrap" maxW="858px" gap="20px" m="auto" justify="space-between">
          <Payment
            value="single"
            selectedValue={selected}
            onChange={setSelected}
            imageSrc={SinglePayment}
            text1="Single Payment"
            text2="Make a direct payment to clients or customers, modify the currency as needed."
          />
          <Payment
            value="recurring"
            selectedValue={selected}
            onChange={setSelected}
            imageSrc={RecurringPayment}
            text1="Recurring Payment"
            text2="For recurring payments or single payments, create a link in your preferred currency."
          />
          <Payment
            value="link"
            selectedValue={selected}
            onChange={setSelected}
            imageSrc={PaymentLink}
            text1="Create Payment Link"
            text2="Generate and receive your link for your charity cause to be sent to merchants and clients."
          />
        </Flex>
      </Box>
      <Button
        h="42px"
        w="282px"
        bg="green.700"
        color="white"
        mx="auto"
        mt="69px"
        borderRadius="8px"
        _hover={{ bg: "green.800" }} 
        _active={{ bg: "green.900" }} 
        display="block"
        onClick={handleProceed}
      >
        Proceed to generate link
      </Button>

       {/* Dialog Component */}
        <DialogRoot
          open={isDialogOpen}
          onOpenChange={(open) => {
            if (open) {
              setIsDialogOpen(true);
            }
          }}
        >
          <DialogContent
            bg="white"
            color="green.700"
            borderRadius="lg"
            p="6"
            boxShadow="xl"
            maxW="90vw"
            w="400px"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
          >
            <DialogBody>
              <Text fontSize={["xs", "sm", "md"]} fontWeight="bold">
                Select a payment type before proceeding
              </Text>
              <Button
                mt="4"
                bg="green.700"
                color="white"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
            </DialogBody>
          </DialogContent>
        </DialogRoot>


    </Box>
  );
}

export default SelectPayment;
