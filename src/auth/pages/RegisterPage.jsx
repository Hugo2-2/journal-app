import { Link as RouterLink } from 'react-router-dom';

import { Google, SnippetFolderRounded } from '@mui/icons-material';
import { Alert, Button, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import Grid from '@mui/material/Grid2';

import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), "Email no válido"],
  password: [(value) => value.length >= 6, "La contraseña debe tener al menos 6 caracteres"],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector( (state) => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

  const { displayName, email, password, onInputChange, formState, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);



  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={ onSubmit } className='animate_animate animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid size={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="name" 
                placeholder='Nombre' 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmited }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid size={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmited }
                helperText={ emailValid }

              />
            </Grid>

            <Grid size={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmited }
                helperText={ passwordValid }
              />
            </Grid>
            
            <Grid size={{ xs: 24, sm: 12 }} container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid size={{ xs: 12, sm: 6 }} display={ !!errorMessage ? '' : 'none' }>
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

              <Grid size={{ xs: 12, sm: 12 }}>
                <Button
                  disabled={ isCheckingAuthentication }
                  type='submit'
                  variant="contained"
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Iniciar sesión
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
