import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid2'
import { TurnedInNot } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({ title = '', body, id, date, imageURLs }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageURLs }) );
    }

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring( 0, 17 ) + '...'
            : title;
    }, [ title ])

    const newBody = useMemo( () => {
        return body.length > 35
            ? body.substring( 0, 42 ) + '...'
            : body;
    }, [ body ])


    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onClickNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ newBody } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
