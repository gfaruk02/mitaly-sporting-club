import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const toggoleDropdown = () => {
        setIsDropdown(!isDropdown)
    }
    const navItems = <>
        <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
            <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : " ",
                        // padding: isActive ? "4px" : " ",
                        rounded: isActive ? "lg" : " ",
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#191970" : "",
                        borderBottom: isActive ? "4px solid #3F3FD4" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Home
            </NavLink>
        </li>
        <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
            <NavLink
                to="/features"
                style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : " ",
                        // padding: isActive ? "4px" : " ",
                        rounded: isActive ? "lg" : " ",
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#191970" : "",
                        borderBottom: isActive ? "4px solid #3F3FD4" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                <div tabIndex={0} role="button" className=" px-2" onClick={toggoleDropdown}>
                    Features
                </div>
            </NavLink>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isDropdown ? 'block' : 'hidden'}`}>
                <li> <a> Club History  </a> </li>
                <li><a>Our Team</a></li>
                <li><a>Join Club</a></li>
            </ul>
        </li>
        <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
            <NavLink
                to="/social"
                style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : " ",
                        // padding: isActive ? "4px" : " ",
                        rounded: isActive ? "lg" : " ",
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#191970" : "",
                        borderBottom: isActive ? "4px solid #3F3FD4" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Social Activity
            </NavLink>
        </li>
        <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
            <NavLink
                to="/contact"
                style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : " ",
                        // padding: isActive ? "4px" : " ",
                        rounded: isActive ? "lg" : " ",
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#191970" : "",
                        borderBottom: isActive ? "4px solid #3F3FD4" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Contact Us
            </NavLink>
        </li>

        <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
            <NavLink
                to="/register"
                style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : " ",
                        // padding: isActive ? "4px" : " ",
                        rounded: isActive ? "lg" : " ",
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#191970" : "",
                        borderBottom: isActive ? "4px solid #3F3FD4" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Register
            </NavLink>
        </li>
        <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
            <NavLink
                to="/login"
                style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : " ",
                        // padding: isActive ? "4px" : " ",
                        rounded: isActive ? "lg" : " ",
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#191970" : "",
                        borderBottom: isActive ? "4px solid #3F3FD4" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Login
            </NavLink>
        </li>
    </>


    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Mitaly Sporting Club</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;