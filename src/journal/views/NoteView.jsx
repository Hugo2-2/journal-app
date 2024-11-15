import { SaveOutlined } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import { Grid } from '@mui/system'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction={ "row" } justifyContent={"space-between"} alignItems={"center"} sx={{ mb: 1 }}>
        <Grid>
            <Typography fontSize={ 39 } fontWeight={ "Light" }>28 de agosto, 2023</Typography>
        </Grid>

        <Grid>
            <Button color='primary' sx={{ padding: 2 }}>
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
            />

            <TextField 
                type="text"
                variant='filled'
                fullWidth
                multiline
                label="Descripción"
                placeholder="¿Qué sucedió en el día?"
                minRows={ 5 }
            />

        </Grid>

        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}
