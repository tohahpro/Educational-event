import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '../../../assets/Images/about-us.jpg'
import { useEffect } from "react";
import Banner from "../../Banner/Banner";
import BottomBanner from "../../Banner/BottomBanner";
import Sponsors from "./Sponsors";


const Home = () => {


    const services = useLoaderData()

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="">
            <Banner></Banner>
            <div className="lg:max-w-[1400px] mx-auto">

                <div className=" lg:flex flex-row-reverse my-20 md:items-center mx-auto ">


                    <div className="lg:ml-20 lg:mr-12"
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                    >
                        <img className="w-full md:w-[650px] lg:rounded-2xl" src={aboutImg} alt="" />
                    </div>
                    <div className="mx-auto space-y-4">
                        <label className="inline-block text-red-500 pl-16  pt-8 lg:p-0">About us</label>
                        <h2 className="text-2xl md:text-5xl font-semibold w-96 px-16 lg:p-0">We Help Cooperate to Manage Event
                        </h2>
                        <p className="w-[17rem] lg:w-[40rem] mx-auto lg:mx-0">Sit vestibulum nec nam porttitor nibh. Urna at faucibus aliquet dolor. Facilisis id diam pellentesque et odio. Potenti sagittis massa lorem arcu sed diam. Consectetur elit sit in donec vitae blandit tincidunt eu. Sed nulla vel diam commodo. Placerat cursus sed blandit eu odio.</p>
                    </div>


                </div>

                <div className="lg:mr-12 lg:py-12">
                    <Sponsors></Sponsors>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto">

                <h2 className="text-center text-3xl font-semibold py-4">Our Services</h2>
                <p className="text-center w-[20rem] lg:w-[750px] mx-auto mb-4">Orci, gravida at dolor penatibus praesent. Id ac nunc nunc elementum vitae nunc cursus. Nunc cras facilisis fermentum elementum, suspendisse augue dolor.</p>
                <div>
                    <div className="flex justify-center ">
                        <button className="border px-10 py-3 rounded-xl bg-black text-white font-semibold">
                            <Link to='/services'>View All Services</Link>
                        </button>
                    </div>


                    {/* grid start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-32 ">

                        {
                            services.slice(0, 6).map(service =>
                                <div key={service.id}>
                                    <div className="card card-compact h-96 lg:w-96 bg-base-100 shadow-xl">
                                        <figure><img className="w-full" src={service.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-left">{service.title}</h2>
                                            <p className="text-left">{service.description.slice(0, 83)}..</p>
                                            <p className="text-lg font-medium">Booking-Price : <span className="text-red-400">{service.price} </span>$</p>

                                        </div>
                                        <div className="card-actions ">
                                            <Link to={`/eventDetails/${service.id}`}
                                                className="btn w-full mx-auto bg-black rounded-t-none text-white">See More
                                            </Link>
                                        </div>
                                    </div>

                                </div>)
                        }
                    </div>
                    {/* grid end  */}

                </div>
            </div >
            <BottomBanner></BottomBanner>
        </div>



    )
};

export default Home;