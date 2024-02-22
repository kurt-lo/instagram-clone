import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {

  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

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
      <Button
        colorScheme='blue'
        w={'full'} size={'sm'}
        fontSize={14}
      >
        Login
      </Button>
    </>
  )
}

export default Login