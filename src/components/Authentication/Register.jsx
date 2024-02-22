import { Input, InputGroup, InputRightElement, Button, Alert } from '@chakra-ui/react'
import { useState } from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { CiSquareAlert } from "react-icons/ci";
import useSignUpWithEmailPassword from '../../hooks/useSignUpWithEmailPassword';

const Register = () => {

    const [inputForm, setInputForm] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false)
    
    const { signup, loading, error } = useSignUpWithEmailPassword();

    return (
        <>
            <Input
                value={inputForm.email}
                onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
                type='email'
                placeholder='Email'
                fontSize={14}
                size='sm'
            // onKeyDown={() => setErrorInput(false)} 
            />
            <Input
                value={inputForm.fullName}
                onChange={(e) => setInputForm({ ...inputForm, fullName: e.target.value })}
                type='text'
                placeholder='Full name'
                // onKeyDown={() => setErrorInput(false)}
                fontSize={14}
                size='sm'
            />
            <Input
                value={inputForm.username}
                onChange={(e) => setInputForm({ ...inputForm, username: e.target.value })}
                type='text'
                placeholder='Username'
                // onKeyDown={() => setErrorInput(false)}
                fontSize={14}
                size='sm'
            />
            <InputGroup>
                <Input
                    value={inputForm.password}
                    onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    fontSize={14}
                    size='sm'
                />
                <InputRightElement h='full'>
                    <Button variant='solid' size='sm'
                        onClick={() => setShowPassword(prevState => !prevState)}
                    >
                        {showPassword ? <LuEye /> : <LuEyeOff />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <CiSquareAlert size={12} />
                        {error.message}
                </Alert>
            )}
            <Button
                colorScheme='blue'
                w={'full'} size={'sm'}
                fontSize={14}
                isLoading={loading}
                onClick={() => signup(inputForm)}
            >
                Sign up
            </Button>
        </>
    )
}

export default Register