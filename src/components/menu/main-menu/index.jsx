import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav>
            <ul className="main-menu">
                <li className="active">
                    <NavLink className="main-menu-link" exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        About Us
                    </NavLink>
                    {/* <ul className="sub-menu">
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/service"}
                            >
                                About US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/service-details/1"
                                }
                            >
                                Service Details
                            </NavLink>
                        </li>
                    </ul> */}
                </li>

                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Branches
                    </NavLink>
                    {/* <ul className="sub-menu">
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog"}
                            >
                                Blog list
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog-details/1"}
                            >
                                Blog Details
                            </NavLink>
                        </li>
                    </ul> */}
                </li>

                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
