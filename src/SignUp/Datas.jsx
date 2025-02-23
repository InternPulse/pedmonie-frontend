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
import { LuLock, LuMail, LuUser, LuPhone } from "react-icons/lu";
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
        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            placeholder="Enter Your First Name"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: "#292D32" }}
            color="#292D32"
          />
        </InputGroup>

        {/* Last Name */}
        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            placeholder="Enter Your Last Name"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: "#292D32" }}
            color="#292D32"
          />
        </InputGroup>
      </HStack>

      {/* Middle Name */}
      <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
        <Input
          placeholder="Enter Your Middle Name(optional)"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: "#292D32" }}
          color="#292D32"
        />
      </InputGroup>

      {/* Email Address */}
      <InputGroup flex="1" startElement={<LuMail color="#292D32" />}>
        <Input
          placeholder="Enter Your Email Address"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: "#292D32" }}
          color="#292D32"
        />
      </InputGroup>

      {/* Phone Number */}
      <InputGroup flex="1" startElement={<LuPhone color="#292D32" />}>
        <Input
          placeholder="Enter Your Phone Number"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: "#292D32" }}
          color="#292D32"
        />
      </InputGroup>

      {/* Date of birth */}
      <Input
        placeholder="Enter Your Last Name"
        variant="subtle"
        color="#292D32"
        type="date"
        bg="#EEEEEE"
        _placeholder={{ color: "#292D32" }}
      />

      {/* Password */}
      <Stack>
        <InputGroup flex="1" startElement={<LuLock color="#292D32" />}>
          <PasswordInput
            placeholder="Enter Password"
            visible={visible}
            onVisibleChange={setVisible}
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: "#292D32" }}
            _visible={{ bg: "#292D32" }}
            color="#292D32"
          />
        </InputGroup>
      </Stack>
      <Stack>
        <InputGroup flex="1" startElement={<LuLock color="#292D32" />}>
          <PasswordInput
            placeholder="Confirm Password"
            visible={visible}
            onVisibleChange={setVisible}
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: "#292D32" }}
            color="#292D32"
          />
        </InputGroup>
      </Stack>

      {/* CheckBox */}
      <Checkbox color="#2D3748">
        I agree to all the Terms and Privacy policy
      </Checkbox>

      {/* Buttons */}
      <ButtonGroup variant="subtle" gap="6%">
        <Button bg="#CBCBCB" color="#8E8E8E" w="47%" h="49px">
          Create Account
        </Button>
        <Button bg="#737375" color="white" w="47%" h="49px">
          <Image src={google} />
          Sign-up with google
        </Button>
      </ButtonGroup>

      {/* SIGN UP OPTION */}
      <Stack align="center">
        <HStack>
          <Text textAlign="center" fontSize="sm" color="#2D3748">
            Don't have an account?
          </Text>
          <Text
            textAlign="center"
            color="#2E5C38"
            fontWeight="bold"
            fontSize="sm"
          >
            Log in
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
export default Demos;
