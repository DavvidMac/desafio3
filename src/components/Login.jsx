import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../store/modules/user/actions'
import { ValidateEmail } from '../utils/validate'
import {
  Button,
  TextField,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  Box
} from '@mui/material/'
 
import { Visibility, VisibilityOff } from '@mui/icons-material'
const Login = () => {
    const dispatch = useDispatch()


    const user = useSelector((state)=>state.user)

    useEffect(()=>{
        console.log("Reading state", user)
    },[user])

    const [values, setValues] = useState({
      email: '',
      password: '',
      showPassword: false
    })
  
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value })
      if (prop === 'email') handleValidateEmail(event.target.value)
      if (prop === 'password') handleValidatePassword(event.target.value)
    }
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword
      })
    }
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }
  
    const handleValidateEmail = (email) => {
      if (values.email.length === 0 || !ValidateEmail(email)) {
        setEmailError(true)
        return false
      } else {
        setEmailError(false)
        return true
      }
    }
  
    const handleValidatePassword = (password) => {
      if (password.length === 0) {
        setPasswordError(true)
        return false
      } else {
        setPasswordError(false)
        return true
      }
    }
  
    const handleLogin = () => {
      if (
        !handleValidateEmail(values.email) ||
        !handleValidatePassword(values.password)
      )
        return
  
      dispatch(
        loginRequest({
          email: values.email,
          password: values.password
        })
      )
    }

  return (
    <Box component='div' sx={{ padding: '50px 50px 50px 20px' }}>
      <h1
        style={{
          fontSize: '20px',
          color: '#646473',
          textAlign: 'center',
          fontWeight: 'normal',
          marginBottom: '50px'
        }}
      >
        Faça seu login
      </h1>

      <TextField
        fullWidth
        label='E-mail'
        id='email'
        type='email'
        error={emailError}
        helperText={emailError ? 'Informe um email válido' : ''}
        variant='filled'
        value={values.email}
        onChange={handleChange('email')}
        sx={{ marginBottom: '15px' }}
      />
      <FormControl style={{ width: '100%' }} variant='filled'>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <FilledInput
          id='password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          error={passwordError}
          required
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Button
          variant='outlined'
          style={{ width: '80%' }}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </div>
    </Box>
  )
}

export default Login