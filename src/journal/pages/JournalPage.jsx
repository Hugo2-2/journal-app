import { useDispatch, useSelector } from "react-redux"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"


import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal/"


export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }


  return (
    <JournalLayout>

      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        className=".box-shadow"
        size="medium"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.dark', opacity: 0.9 },
          position: "fixed",
          right: 40,
          bottom: 40,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
