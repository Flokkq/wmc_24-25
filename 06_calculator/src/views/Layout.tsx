import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className={"layout"}>
                <ul>
                    <li>
                        <NavLink to="/">Calc</NavLink>
                    </li>
                    <li>
                        <NavLink to="/high-scores">Higjscores</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;