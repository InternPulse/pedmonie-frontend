import { Dialog, Button, Box, Text, Flex } from "@chakra-ui/react";

const LogoutDialog = () => {
    return (
        <Dialog.Root>
            {/* Logout Button to Open Dialog */}
            <Dialog.Trigger asChild>
                <Button colorScheme="red">Logout</Button>
            </Dialog.Trigger>

            {/* Modal Backdrop */}
            <Dialog.Backdrop bg="blackAlpha.600" />
            <Dialog.Positioner>
                <Dialog.Content
                    bg="white"
                    p={16}
                    borderRadius="lg"
                    shadow="lg"
                    maxW="lg"
                    textAlign="center"
                >
                    {/* Header */}
                    <Flex align="center" justify="center" direction="column">
                        <Dialog.Header>
                            <Dialog.Title fontSize="xl" color="gray.800" fontWeight="bold">
                                Logging out?
                            </Dialog.Title>
                        </Dialog.Header>

                        {/* Body */}
                        <Dialog.Body>
                            <Text color="gray.600" >
                                Are you sure you want to logout of your Pedmonie account?
                            </Text>
                        </Dialog.Body>

                        {/* Footer Buttons */}
                        <Dialog.Footer>
                            <Flex justify="center" gap={4} mt={4}>
                                <Dialog.Trigger asChild>
                                    <Button color="white" backgroundColor="red" px={12}>
                                        Logout
                                    </Button>
                                </Dialog.Trigger>
                                <Dialog.Trigger asChild>
                                    <Button variant="outline" color="black" backgroundColor="white" borderColor="gray.400" px={12}>
                                        Not yet
                                    </Button>
                                </Dialog.Trigger>
                            </Flex>
                        </Dialog.Footer>
                    </Flex>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
};

export default LogoutDialog;
