import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { Grid } from "@mui/system"


export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `-${ drawerWidth }px` },
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid sx={{ width: "100%" }} container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>

    </AppBar>
  )
}