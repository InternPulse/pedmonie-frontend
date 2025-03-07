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
  // State to track input values
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // Function to check if all fields are filled
  const allFieldsFilled =
    name && email && password && confirmPassword && phoneNumber && isChecked;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Stack gap="16px" onSubmit={handleSubmit}>
      {/* First Name */}
      <HStack gap="6" width="full">
        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            placeholder="Enter Your First Name"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: "#292D32" }}
            color="#292D32"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
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
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputGroup>
        {/* CheckBox */}
        <Checkbox
          color="#2D3748"
          value={isChecked}
          onChange={(e) => setIsChecked(e.target.value)}
          required
        >
          I agree to all the Terms and Privacy policy
        </Checkbox>
      </Stack>

      {/* Buttons */}
      <ButtonGroup variant="subtle" gap="6%">
        <Button
          bg="#CBCBCB"
          color="#8E8E8E"
          w="47%"
          h="49px"
          style={{
            backgroundColor: allFieldsFilled ? "green" : "gray",
            cursor: allFieldsFilled ? "pointer" : "not-allowed",
          }}
          disabled={!allFieldsFilled}
        >
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
