import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from '../../assets/Images/Event Marketing and Promotion.jpg'
import { useEffect } from "react";
import Banner from "../Banner/Banner";

const Home = () => {


    const services = useLoaderData()

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:flex md:my-20 md:items-center">
                    <div className=""
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <img className="lg:w-[650px] rounded-2xl" src={img} alt="" />
                    </div>

                    <h2 className="md:ml-16 md:text-5xl font-semibold">Learn to code like a professional.
                    </h2>
                </div>
                <div className=" lg:flex flex-row-reverse  md:my-20 md:items-center">


                    <div className=""
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <img className="md:w-[650px] rounded-2xl" src={img} alt="" />
                    </div>
                    <h2 className="md:text-5xl font-semibold">Learn to code like a professional.
                    </h2>


                </div>

            </div>

            <div className="max-w-screen-xl mx-auto">

                <h2 className="text-center text-3xl font-medium py-4">Our Events</h2>
                <div>
                    <div className="flex justify-center ">
                        <button className="border p-2 bg-sky-500 text-white font-medium">
                            <Link to='/event'>See all events</Link>
                        </button>
                    </div>


                    {/* grid start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-32 ">

                        {
                            services.slice(0, 6).map(service =>
                                <div key={service.id}>
                                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                        <figure><img className="h-64 w-full" src={service.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{service.category}</h2>

                                            <div className="card-actions ">
                                                <Link to={`/eventDetails/${service.id}`}
                                                    className="btn w-full btn-primary">See Details
                                                </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>)
                        }
                    </div>
                    {/* grid end  */}

                </div>

            </div >

        </div>



    )
};

export default Home;