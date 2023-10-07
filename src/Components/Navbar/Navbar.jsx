import { NavLink } from "react-router-dom";

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false)



    return (
        <div>
            <nav className="flex justify-between items-center p-4  max-w-screen-xl mx-auto shadow-lg">

                <h2>logo</h2>
                <div className="flex flex-row-reverse">
                    <div className="md:hidden justify-end text-2xl" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                        }
                    </div>
                    <ul className={`absolute md:flex mr-4 mt-6 md:m-0 p-6 md:p-0 lg:m-0 duration-2000
            ${open ? ' ' : 'hidden'} md:static bg-white/100
          md:bg-transparent text-center rounded-lg gap-8`}>
                        <li className="text-black text-lg font-normal">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-black text-lg font-normal">
                            <NavLink
                                to="/event"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Event
                            </NavLink>
                        </li>
                        <li className="text-black text-lg font-normal">
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

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        <img src=""
                                            alt="" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-2xl font-bold">
                                    <li>
                                        <a className="justify-between">

                                        </a>
                                    </li>

                                    <li>
                                        <button className="py-2 px-3">Logout</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;