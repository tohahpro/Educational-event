import { Link, NavLink } from "react-router-dom";

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 30) {
                setColor('#AED2FF')
                setTextColor('#000000')
            }
            else {
                setColor('transparent')
                setTextColor('#27005D')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div>
            <nav style={{ backgroundColor: `${color}` }}
                className="
                        px-4 absolute top-8 left-0 right-0 z-[2]           
                        lg:fixed items-center justify-between lg:top-0 lg:left-0 lg:w-full lg:z-[10] lg:ease-in lg:duration-300 lg:px-40 lg:py-2 ">


                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">logo</h2>
                    <div className="md:hidden justify-end text-2xl" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                        }
                    </div>

                    <ul style={{ color: `${textColor}` }}
                        className={`absolute md:flex mt-0 ml-56 md:m-0 p-6 md:p-0 lg:m-0 duration-2000
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
                                to="/event"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Events
                            </NavLink>
                        </li>
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
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Register
                            </NavLink>
                        </li>


                        <div>
                            {
                                user ?
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user.photoURL}
                                                    alt={user.displayName} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-2xl font-bold">
                                            <li>
                                                <a className="justify-between">
                                                    {user.displayName}
                                                </a>
                                            </li>

                                            <li>
                                                <button className="py-2 px-3" onClick={logOut}>Logout</button>
                                            </li>
                                        </ul>
                                    </div>

                                    :

                                    <Link to='/login'>LogIn</Link>

                            }
                        </div>

                    </ul>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;