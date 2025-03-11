import {
  Box,
  Button,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuCircleHelp } from "react-icons/lu";

const SupportFaq = () => {
  return (
    <Stack position="relative" mt={10} width="100%">
      <LinkBox>
        <Box as="h4" display="flex" gap={6}>
          <Box pt="2px">
            <LuCircleHelp></LuCircleHelp>
          </Box>
          <Box>
            <LinkOverlay
              href="#"
              color=" var(--Primary-green-default, rgba(46, 92, 56, 1))"
              fontSize="16px"
              fontWeight={500}
            >
              Account Management Issues?
            </LinkOverlay>
            <Text color=" rgba(61, 61, 61, 1)" fontSize="16px" fontWeight={400}>
              Managing your account efficiently ensures you have full access{" "}
              <br />
              to our platform’s features, security settings, and personalized{" "}
              <br />
              preferences. If you are experiencing issues in managing...
            </Text>
          </Box>
        </Box>
      </LinkBox>
      <LinkBox>
        <Box as="h4" display="flex" gap={6}>
          <Box pt="2px">
            <LuCircleHelp></LuCircleHelp>
          </Box>
          <Box>
            {" "}
            <LinkOverlay
              href="#"
              color=" var(--Primary-green-default, rgba(46, 92, 56, 1))"
              fontSize="16px"
              fontWeight={500}
            >
              Payment and transactions
            </LinkOverlay>
            <Text color=" rgba(61, 61, 61, 1)" fontSize="16px" fontWeight={400}>
              If you’re experiencing issues with payments or transactions, it{" "}
              <br />
              could be due to various factors such as insufficient funds,
              <br /> processing delays, incorrect details, or security
              restrictions.
              <br /> Ensure your...
            </Text>
          </Box>
        </Box>
      </LinkBox>
      <LinkBox>
        <Box as="h4" display="flex" gap={6}>
          <Box pt="2px">
            <LuCircleHelp></LuCircleHelp>
          </Box>
          <Box>
            <LinkOverlay
              href="#"
              color=" var(--Primary-green-default, rgba(46, 92, 56, 1))"
              fontSize="16px"
              fontWeight={500}
            >
              Technical support
            </LinkOverlay>
            <Text color=" rgba(61, 61, 61, 1)" fontSize="16px" fontWeight={400}>
              Not receiving important email, SMS, or app notifications. Check{" "}
              <br />
              your spam or junk folder for missed emails. Ensure notifications
              <br /> are enabled in your device settings and app preferences.
              Try
              <br />
              logging...
            </Text>
          </Box>
        </Box>
      </LinkBox>
      <LinkBox>
        <Box as="h4" display="flex" gap={6}>
          <Box pt="2px">
            <LuCircleHelp></LuCircleHelp>
          </Box>
          <Box>
            <LinkOverlay
              href="#"
              color=" var(--Primary-green-default, rgba(46, 92, 56, 1))"
              fontSize="16px"
              fontWeight={500}
            >
              Security and fruad prevention
            </LinkOverlay>
            <Text color=" rgba(61, 61, 61, 1)" fontSize="16px" fontWeight={400}>
              If you receive a login alert for an unrecognized device or <br />
              location, your account may have been accessed without <br />
              permission. Immediately reset your...
            </Text>
          </Box>
        </Box>
      </LinkBox>
      <LinkBox>
        <Box as="h4" display="flex" gap={6}>
          <Box pt="2px">
            <LuCircleHelp></LuCircleHelp>
          </Box>
          <Box>
            <LinkOverlay
              href="#"
              color=" var(--Primary-green-default, rgba(46, 92, 56, 1))"
              fontSize="16px"
              fontWeight={500}
            >
              Frequently asked questions
            </LinkOverlay>
            <Text color=" rgba(61, 61, 61, 1)" fontSize="16px" fontWeight={400}>
              Here are answers to some of the most common questions <br /> about
              our platform. If you need further assistance, feel free to <br />{" "}
              reach out to our support team...
            </Text>
          </Box>
        </Box>
      </LinkBox>

      <Box width="100%" pt={6}>
        <Text
          fontSize="18px"
          fontWeight={500}
          // textAlign="start"
          color="rgba(30, 30, 30, 1);
"
        >
          Can’t find the answers you are looking for? We’re here to help you
        </Text>
        <Box>
          <Button
            bgColor=" var(--Primary-green-default, rgba(46, 92, 56, 1))"
            color="white"
            mt={3}
            ml="25%"
          >
            Contact Support
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};
export default SupportFaq;
