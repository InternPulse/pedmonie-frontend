import { Text, Box, Flex, Image, Heading, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box py="50px" bg="F5F5F5">
        <Box>
          <Flex
            justify="space-between"
            pr={["", "", "40px", "70px"]}
            direction={["column-reverse", "", "row", "row"]}
          >
            <Box h="290.43px">
              <Image
                src="/public/pedmonie.svg"
                h={["100px", "100px", "auto", "auto"]}
              />

              <Flex justify="center" alignItems="center" gap="90px">
                <Box>
                  <Text
                    textAlign={["left", "left", "center", "center"]}
                    fontSize="15.05px"
                    pb="12.54px"
                    color="grey"
                  >
                    hello@pedmonie.com
                  </Text>
                  <Text
                    textAlign={["left", "left", "center", "center"]}
                    fontSize="15.05px"
                    letterSpacing="1px"
                    color="grey"
                  >
                    (+234) 856 600 0000
                  </Text>
                </Box>

                <Box>
                  <Flex display={["block", "block", "none", "none"]} gap="28px">
                    <Link
                      href="https://x.com/Pedmonie"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                      mr="20px"
                    >
                      <Image src="/public/x_logo.svg.svg" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61573211374847"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                      mr="20px"
                    >
                      <Image src="/public/facebook.svg" />
                    </Link>

                    <Link
                      href=""
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      <Image src="/public/instagram.svg" />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box
              pt={["0px", "0px", "25px", "25px"]}
              pb={["0px", "0px", "50px", "50px"]}
              w={["", "", "", "auto"]}
            >
              <Image
                src="/public/line.svg"
                display={["block", "block", "none", "none"]}
              />
              <Flex
                gap={["", "", "50px", "60px"]}
                direction={["column", "column", "row", "row"]}
                ml={["23px", "23px", "", ""]}
              >
                <ul>
                  <Heading fontSize={["", "14px", "15.05px"]} mb="25.09px">
                    Company
                  </Heading>
                  <Box as="li" pb="15px" fontSize="15.05px" color="grey">
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Blog
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    pb="15px"
                    fontSize={["", "14px", "15.05px"]}
                    color="grey"
                  >
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Career
                    </Link>
                  </Box>
                  <Box as="li" fontSize={["", "14px", "15.05px"]} color="grey">
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Pricing
                    </Link>
                  </Box>
                </ul>

                <ul>
                  <Heading fontSize={["", "14px", "15.05px"]} mb="25.09px">
                    Resources
                  </Heading>
                  <Box
                    as="li"
                    pb="15px"
                    fontSize={["", "14px", "15.05px"]}
                    color="grey"
                  >
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Documentation
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    pb="15px"
                    fontSize={["", "14px", "15.05px"]}
                    color="grey"
                  >
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Papers
                    </Link>
                  </Box>
                  <Box as="li" fontSize={["", "14px", "15.05px"]} color="grey">
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Press Conferences
                    </Link>
                  </Box>
                </ul>

                <ul>
                  <Heading fontSize={["", "14px", "15.05px"]} mb="25.09px">
                    Legal
                  </Heading>
                  <Box
                    as="li"
                    pb="20px"
                    fontSize={["", "14px", "15.05px"]}
                    color="grey"
                  >
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Terms of Service
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    pb="15px"
                    fontSize={["", "14px", "15.05px"]}
                    color="grey"
                  >
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Private Policy
                    </Link>
                  </Box>
                  <Box
                    as="li"
                    pb="15px"
                    fontSize={["", "14px", "15.05px"]}
                    color="grey"
                  >
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Cookies Policy
                    </Link>
                  </Box>
                  <Box as="li" fontSize={["", "14px", "15.05px"]} color="grey">
                    <Link
                      href="https://www.google.com"
                      outline="none"
                      textDecoration="none"
                      color="grey"
                    >
                      Data Processing
                    </Link>
                  </Box>
                  <Image
                    src="/public/line.svg"
                    pt="15px"
                    display={["block", "block", "none", "none"]}
                  />
                </ul>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Image
            src="/public/line.svg"
            pb="15px"
            display={["none", "", "block", "block"]}
          />

          <Flex
            justify={["center", "center", "space-between", "space-between"]}
            px="50px"
          >
            <Flex gap="10px">
              <Text color="grey" as="span" fontSize="15.05px">
                2025, Pedmonie Inc.
              </Text>
            </Flex>

            <Flex gap="50px" display={["none", "none", "block", "block"]}>
              <Link
                href="https://x.com/Pedmonie"
                outline="none"
                textDecoration="none"
                color="grey"
                ml="10px"
              >
                <Image src="/public/x_logo.svg.svg" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61573211374847"
                outline="none"
                textDecoration="none"
                color="grey"
              >
                <Image src="/public/facebook.svg" />
              </Link>

              <Link href="" outline="none" textDecoration="none" color="grey">
                <Image src="/public/instagram.svg" />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
