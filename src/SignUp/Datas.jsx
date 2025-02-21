import {
  Button,
  ButtonGroup,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuLock, LuMail, LuUser } from "react-icons/lu";
import React from "react";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import google from "../svgs/google.svg";

const Demos = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Stack gap="16px">
      {/* First Name */}
      <HStack gap="6" width="full">
        <InputGroup flex="1" startElement={<LuUser />}>
          <Input placeholder="Enter Your First Name" variant="subtle" />
        </InputGroup>
        {/* Last Name */}
        <InputGroup flex="1" startElement={<LuUser />}>
          <Input placeholder="Enter Your Last Name" variant="subtle" />
        </InputGroup>
      </HStack>
      {/* Middle Name */}
      <InputGroup flex="1" startElement={<LuUser />}>
        <Input
          placeholder="Enter Your Middle Name(optional)"
          variant="subtle"
        />
      </InputGroup>
      {/* Email Address */}
      <InputGroup flex="1" startElement={<LuMail />}>
        <Input placeholder="Enter Your Email Address" variant="subtle" />
      </InputGroup>
      {/* Date of birth */}
      <Input
        placeholder="Enter Your Last Name"
        variant="subtle"
        type="datetime-local"
        color="#575757"
      />
      {/* Password */}
      <Stack>
        <InputGroup flex="1" startElement={<LuLock />}>
          <PasswordInput
            placeholder="Enter Password"
            visible={visible}
            onVisibleChange={setVisible}
            variant="subtle"
          />
        </InputGroup>
      </Stack>
      <Stack>
        <InputGroup flex="1" startElement={<LuLock />}>
          <PasswordInput
            placeholder="Confirm Password"
            visible={visible}
            onVisibleChange={setVisible}
            variant="subtle"
          />
        </InputGroup>
      </Stack>
      {/* CheckBox */}
      <Checkbox>I agree to all the Terms and Privacy policy</Checkbox>
      {/* Buttons */}
      <ButtonGroup size="xl" variant="subtle">
        <Button bg="#CBCBCB" color="#8E8E8E">
          Create Account
        </Button>
        <Button bg="#737375" color="white">
          <Image src={google}></Image>
          Sign-up with google
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
export default Demos;
