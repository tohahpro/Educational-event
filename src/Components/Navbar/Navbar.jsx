import { NavLink } from "react-router-dom";

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Logo from "../Logo/Logo";


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 30) {
                setColor('#111111')
                setTextColor('#ffffff')
            }
            else {
                setColor('transparent')
                setTextColor('#ffff')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div className="lg:mx-56">
            <nav style={{ backgroundColor: `${color}` }}
                className="
                        px-4 absolute top-8 left-0 right-0 z-[2]           
                        lg:fixed items-center justify-between lg:top-0 lg:left-0 lg:w-full lg:z-[10] lg:ease-in lg:duration-300 lg:px-40 lg:pb-2 md:pt-6">


                <div className="flex items-center justify-between">
                    <Logo></Logo>
                    <div className="md:hidden justify-end text-2xl text-white" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                        }
                    </div>

                    <ul style={{ color: `${textColor}` }}
                        className={`absolute md:flex mt-64 w-full lg:max-w-fit bg-black md:m-0 p-6 md:p-0 duration-2000
                        ${open ? ' ' : 'hidden'} md:static 
                        md:bg-transparent text-center rounded-lg gap-8`}>
                        <li className=" text-xl font-medium">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className=" text-xl font-medium">
                            <NavLink
                                to="/services"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        {
                            user?.emailVerified ?


                                <>
                                    <li className=" text-xl font-medium">
                                        <NavLink
                                            to="/dashboard"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className=" text-xl font-medium">
                                        <NavLink
                                            to="/profile"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                            }
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                </>

                                : ''
                        }
                        <li className=" text-xl font-medium">
                            <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Register
                            </NavLink>
                        </li>


                        <div >
                            {
                                user ?
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user.photoURL}
                                                    alt={user.displayName} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-2xl font-medium bg-black/80 text-white">
                                            <li>
                                                <a className="justify-between">
                                                    {user.displayName}
                                                </a>
                                            </li>

                                            <li>
                                                <button className="py-2 px-3 hover:text-white" onClick={logOut}>Logout</button>
                                            </li>
                                        </ul>
                                    </div>

                                    :

                                    <li className="text-xl font-medium">
                                        <NavLink
                                            to='/login'
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                            }
                                        >LogIn
                                        </NavLink>
                                    </li>

                            }
                        </div>

                    </ul>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;