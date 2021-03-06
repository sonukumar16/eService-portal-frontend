import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import ToolbarComponent from "../../components/Toolbar";
import DrawerComponent from "../../components/Drawer";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import { getRole, removeCookies } from "../../utils";
import { clearLoginData } from "../../store/actions/auth";


const Dashboard = () => {
    const [drawerLeft, setDrawerLeft] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        dispatch(clearLoginData());
        removeCookies();
        history.push("/");
    }

    return (
        <>
            <ToolbarComponent openDrawerHandler={() => setDrawerLeft(true)}
                logoutHandler={logoutHandler}
            />
            <DrawerComponent
                left={drawerLeft}
                toggleDrawerHandler={() => setDrawerLeft(false)}
            />
            { getRole() == 1 ? <AdminDashboard /> : <UserDashboard />}
        </>
    )

};

export default Dashboard;