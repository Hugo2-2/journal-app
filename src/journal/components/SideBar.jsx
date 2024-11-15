import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Grid from "@mui/material/Grid2"



export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            
        >
            <Toolbar>
                <Typography variant="h6" component="div">
                    Hugo Espejo
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ["Enero", "Febrero", "Marzo", "Abril"].map(text => (
                        <ListItem key={ text }disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ "Excepteur dolor deserunt consectetur ad esse cupidatat." } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
