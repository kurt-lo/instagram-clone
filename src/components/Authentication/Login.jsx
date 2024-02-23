import { Input, Button, Alert } from '@chakra-ui/react'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'
import { CiSquareAlert } from "react-icons/ci";

const Login = () => {

  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { loading, error, login } = useLogin()

  return (
    <>
      <Input
        value={inputForm.email}
        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
        placeContent='Email'
        type='email'
        placeholder='Email'
        fontSize={14}
        size='sm'
      // onKeyDown={() => setErrorInput(false)} 
      />
      <Input
        value={inputForm.password}
        onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
        placeContent='Password'
        type='password' placeholder='Password'
        // onKeyDown={() => setErrorInput(false)}
        fontSize={14}
        size='sm'
      />
      {/* {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <CiSquareAlert size={12} />
          {error.message}
        </Alert>
      )} */}
      <Button
        colorScheme='blue'
        w={'full'} size={'sm'}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputForm)}
      >
        Login
      </Button>
    </>
  )
}

export default Login