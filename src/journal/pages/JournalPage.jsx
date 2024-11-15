import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
