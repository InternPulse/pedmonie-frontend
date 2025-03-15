import {
  Button,
  ButtonGroup,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { InputGroup } from '../components/ui/input-group'
import { LuLock, LuMail, LuUser, LuPhone } from 'react-icons/lu'
import React, { useState, useCallback } from 'react'
import { PasswordInput } from '../components/ui/password-input'
import { Checkbox } from '../components/ui/checkbox'
import google from '../svgs/google.svg'
import { Link } from 'react-router-dom'
import { djangoAPI } from "../../config/apiConfig"

const Demos = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    business_name: '',
    bvn: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    agreed: false,
  })

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleCreateAccount = useCallback(async (e) => {
    e.preventDefault();

    // Reset previous error message
    setError('');
    setSuccess('');

    // Form validation
    if (
      !formData.first_name || 
      !formData.last_name || 
      !formData.email || 
      !formData.password ||
      !formData.phone ||
      !formData.bvn ||
      !formData.business_name ||
      !formData.confirm_password
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError('Password and confirm password do not match.');
      return;
    }

    if (!formData.agreed) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    try {
      setLoading(true);
      const { agreed, ...dataToSend } = formData;

      // Testing
      console.log('Data to send:', dataToSend);

      const response = await djangoAPI.post("/api/v1/merchants/", dataToSend);

      if (response.data) {
        setSuccess(response.data.message);
        console.log('Newly registered merchant:', response.data);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'An error occurred. Please try again.');
        //testing
        console.error(error.response.data.message)
      } else {
        setError('An error occurred. Please try again');
        //testing
        console.error("Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return (
    <Stack gap="16px" as="form" onSubmit={handleCreateAccount}>
      {/* First Name & Last Name */}
      <HStack gap="6" width="full">
        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter Your First Name"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: '#292D32' }}
            color="#292D32"
          />
        </InputGroup>

        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter Your Last Name"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: '#292D32' }}
            color="#292D32"
          />
        </InputGroup>
      </HStack>

      {/* Middle Name */}
      <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
        <Input
          name="middle_name"
          value={formData.middle_name}
          onChange={handleChange}
          placeholder="Enter Your Middle Name (optional)"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: '#292D32' }}
          color="#292D32"
        />
      </InputGroup>

      {/* Email */}
      <InputGroup flex="1" startElement={<LuMail color="#292D32" />}>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email Address"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: '#292D32' }}
          color="#292D32"
        />
      </InputGroup>

      {/* Phone Number */}
      <InputGroup flex="1" startElement={<LuPhone color="#292D32" />}>
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Your Phone Number"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: '#292D32' }}
          color="#292D32"
        />
      </InputGroup>

      {/* Business Name & BVN */}
      <Input
        name="business_name"
        value={formData.business_name}
        onChange={handleChange}
        placeholder="Enter Business Name"
        variant="subtle"
        color="#292D32"
        bg="#EEEEEE"
        _placeholder={{ color: '#292D32' }}
      />
      <Input
        name="bvn"
        value={formData.bvn}
        onChange={handleChange}
        placeholder="Enter Bank Verification Number"
        variant="subtle"
        color="#292D32"
        bg="#EEEEEE"
        _placeholder={{ color: '#292D32' }}
      />

      {/* Password */}
      <InputGroup flex="1" startElement={<LuLock color="#292D32" />}>
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: '#292D32' }}
          color="#292D32"
        />
      </InputGroup>

      {/* Confirm Password */}
      <InputGroup flex="1" startElement={<LuLock color="#292D32" />}>
        <PasswordInput
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder="Confirm Password"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: '#292D32' }}
          color="#292D32"
        />
      </InputGroup>

      {/* Checkbox */}
      <Checkbox name="agreed" isChecked={formData.agreed} onChange={handleChange}>
        I agree to all the Terms and Privacy policy
      </Checkbox>

      {/* Buttons */}
      <ButtonGroup variant="subtle" gap="6%">
        <Button
          type="submit"
          bg={formData.agreed ? '#2E5C38' : '#CBCBCB'}
          color="white"
          w="47%"
          h="49px"
          isDisabled={!formData.agreed}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <Button bg="#737375" color="white" w="47%" h="49px">
          <Image src={google} alt="Sign up with Google" />
          Sign-up with Google
        </Button>
      </ButtonGroup>

      {/* Error and Success Messages */}
      {error && <Text color="red.500" textAlign="center">{error}</Text>}
      {success && <Text color="green.500" textAlign="center">{success}</Text>}
    </Stack>
  );
};

export default Demos;
