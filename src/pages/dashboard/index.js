import React, { useState } from "react";
import ToolbarComponent from "../../components/Toolbar";
import DrawerComponent from "../../components/Drawer";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
    const [drawerLeft, setDrawerLeft] = useState(false);
    return (
        <>
            <ToolbarComponent openDrawerHandler={() => setDrawerLeft(true)} />
            <DrawerComponent
                left={drawerLeft}
                toggleDrawerHandler={()=> setDrawerLeft(false)}
            />
            <UserDashboard></UserDashboard>
        </>
    )

};

export default Dashboard;