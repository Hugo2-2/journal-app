import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { chekingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

import { Google } from '@mui/icons-material';
import { Button, Link, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useMemo } from 'react';


export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'hugo@google.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch( startLoginWithEmailPassword({ email: email.value, password: password.value }) );
  }

  const onGoogleSignIn = () => {

    dispatch( startGoogleSignIn() );


    console.log('onGoogleSignIn');
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid size={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid size={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>
            
            <Grid size={{ xs: 24, sm: 12 }} container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  disabled={ isAuthenticating }
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  disabled={ isAuthenticating }
                  variant="contained"
                  fullWidth
                  onClick={ onGoogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}