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
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Demos = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
    business_name: 'Tiatech',
    bvn: '45678901234',
    agreed: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleCreateAccount = useCallback(async () => {
    if (!formData.agreed) {
      setError('You must agree to the terms and conditions.');
      return
    }

    try {
      const response = await django.post('/merchants', formData);

      if (response.data) {
        //testing
        console.log("Newly register merchant", response.data);
       // navigate('/login');
      }
        
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Try again.')
    } finally {
      setLoading(false)
    }
  })

  return (
    <Stack gap="16px">
      {/* First Name */}
      <HStack gap="6" width="full">
        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Your First Name"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: '#292D32' }}
            color="#292D32"
          />
        </InputGroup>

        {/* Last Name */}
        <InputGroup flex="1" startElement={<LuUser color="#292D32" />}>
          <Input
            name="lastName"
            value={formData.lastName}
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
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Enter Your Middle Name (optional)"
          variant="subtle"
          bg="#EEEEEE"
          _placeholder={{ color: '#292D32' }}
          color="#292D32"
        />
      </InputGroup>

      {/* Email Address */}
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

      {/* Date of Birth */}
      <Input
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        type="date"
        placeholder="Date of Birth"
        variant="subtle"
        color="#292D32"
        bg="#EEEEEE"
        _placeholder={{ color: '#292D32' }}
      />

      {/* Password */}
      <Stack>
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
      </Stack>

      {/* Confirm Password */}
      <Stack>
        <InputGroup flex="1" startElement={<LuLock color="#292D32" />}>
          <PasswordInput
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            variant="subtle"
            bg="#EEEEEE"
            _placeholder={{ color: '#292D32' }}
            color="#292D32"
          />
        </InputGroup>
      </Stack>

      {/* Checkbox */}
      <Checkbox
        color="#2D3748"
        name="agreed"
        isChecked={formData.agreed}
        onChange={handleChange}
      >
        I agree to all the Terms and Privacy policy
      </Checkbox>

      {/* Buttons */}
      <ButtonGroup variant="subtle" gap="6%">
        <Button
          onClick={handleCreateAccount}
          bg={formData.agreed ? '#2E5C38' : '#CBCBCB'}
          color={formData.agreed ? 'white' : '#8E8E8E'}
          w="47%"
          h="49px"
          cursor={formData.agreed ? 'pointer' : 'not-allowed'}
          isDisabled={!formData.agreed}
        >
          Create Account
        </Button>

        <Button bg="#737375" color="white" w="47%" h="49px">
          <Image src={google} />
          Sign-up with google
        </Button>
      </ButtonGroup>

      {/* Sign-up Option */}
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
            as={Link}
            to="/login"
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Log in
          </Text>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default Demos
