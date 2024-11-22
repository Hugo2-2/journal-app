import { useEffect, useMemo, useRef } from 'react';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutlined, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

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

    const onFileInputChange = ({ target }) => {
        const files = target.files;
        if( files === 0 ) return;

        
        dispatch( startUploadingFiles( files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
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
                <Typography fontSize={ 35 } fontWeight={ "Light" }>{ dateString }</Typography>
            </Grid>

            <Grid>

                <input
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton
                    color='primary'
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

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

                <Grid
                    container
                    width={ "100%" }
                    justifyContent={"flex-end"}
                >
                    <Button
                        onClick={ onDelete }
                        sx={{ mt: 2 }}
                        color='error'
                    >
                        <DeleteOutlined />
                        Borrar
                    </Button>

                </Grid>

            </Grid>

            <Grid
                container
                justifyContent={"center"}
            >
                <ImageGallery images={ note.imageURLs } />

            </Grid>


        </Grid>
    )
}
