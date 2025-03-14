import {  Route, Routes,Outlet } from "react-router"
import { Box } from "@chakra-ui/react";
import PayoutPrefrence from "./Pages/PayoutPrefrence"
import BusinessProfile from "./Pages/BusinessProfile"
import Security from "./Pages/Security"
import ApiWebhooks from "./Pages/ApiWebhooks"
import Notification from "./Pages/Notification"
import NavBar from "./Pages/NavBar";



const Setttings = () => {
  return (
    <>
       
        {/*The Table*/}
        <Box>
          <Box>
          <NavBar/>
          </Box>

          <Routes>
            <Route path="/" element={<PayoutPrefrence/>} />
            <Route path="business-profile" element={<BusinessProfile/>} />
            <Route path="security" element={<Security/>} />
            <Route path="api&webhooks" element={<ApiWebhooks/>} />
            <Route path="notification" element={<Notification/>} />
          </Routes>
        </Box>
        
        <Outlet />
    </>
  )
}

export default Setttings

// BrowserRouter as Router,