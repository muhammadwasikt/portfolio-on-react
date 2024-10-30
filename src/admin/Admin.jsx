import { useContext } from "react"
import AdminSignin from "./AdminSignin"
import { AdminContext } from "./context/AdminContext"
import AdminDashboard from "./dashboard/AdminDashboard"


const Admin = () => {
  const {admin} = useContext(AdminContext)
  
  return (
    <div>
      {admin ? <AdminDashboard /> :<AdminSignin />}
    </div>
  )
}

export default Admin
