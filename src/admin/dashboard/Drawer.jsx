import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import Card from './Card';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const {feedData} = useContext(FeedbackContext)
    
    
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    
    console.log(feedData)
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <div className='text-center pt-8 font-bold text-xl'> 
            <p>Hello 👋 Wasi</p>
                <hr />
            </div>
            <Toolbar />
            {/* <Divider /> */}
            <List>

              <ListItem disablePadding onClick={()=>{navigate("/")}}>


              <ListItemButton>
                  <ListItemIcon>
                      {<InboxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
              </ListItemButton>
          </ListItem>

      </List>
      <List>

<ListItem disablePadding onClick={()=>{navigate("/auth/admin")}}>


<ListItemButton>
    <ListItemIcon>
        {<InboxIcon />}
    </ListItemIcon>
    <ListItemText primary={"Dashboard"} />
</ListItemButton>
</ListItem>

</List>
      <Divider />

        </div>
    );

   
    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className='bg-primaryThemeColor'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='' variant="h6" noWrap component="div">
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                  
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <div className='w-[100%]'>
                {feedData?.map((item)=>{
                  const {id , userName , userEmail , userMessage} = item
                  return(
                    <Card key={id} name={userName} email={userEmail}  description={userMessage} />
                  ) 
                })
                }
                </div>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
  
    window: PropTypes.func,
};

export default ResponsiveDrawer;