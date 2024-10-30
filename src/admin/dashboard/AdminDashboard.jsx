import { Box } from "@mui/material"
import ResponsiveDrawer from "./Drawer"



const AdminDashboard = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
                    <ResponsiveDrawer />
                </Box>

            </div>
        </div>
    )
}

export default AdminDashboard
