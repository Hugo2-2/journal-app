import { useEffect, useMemo } from 'react';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    useEffect( () => {
        dispatch( setActiveNote( formState ) );
    }, [formState])

    useEffect(() => {
        if( messageSaved.length > 0 ) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }


    return (
        <Grid 
            container 
            direction={ "row" } 
            justifyContent={"space-between"} 
            alignItems={"center"} 
            sx={{ mb: 1 }}
            className='animate_animate animate__animated animate__fadeIn animate__faster'
        >
            <Grid>
                <Typography fontSize={ 39 } fontWeight={ "Light" }>{ dateString }</Typography>
            </Grid>

            <Grid>
                <Button 
                    color='primary' 
                    sx={{ padding: 2 }} 
                    onClick={ onSaveNote }
                    disabled={ isSaving }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container width={"100%"}>
                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    placeholder="Escribe aquí un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField 
                    type="text"
                    variant='filled'
                    fullWidth
                    multiline
                    label="Descripción"
                    placeholder="¿Qué sucedió en el día?"
                    minRows={ 5 }
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                />

            </Grid>

            {/* Image gallery */}
            <ImageGallery />

        </Grid>
    )
}
