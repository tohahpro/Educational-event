import { Link, useLoaderData } from "react-router-dom";

import Slider from "../Slider/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from '../../assets/Images/Event Marketing and Promotion.jpg'
import { useEffect } from "react";

const Home = () => {


    const services = useLoaderData()

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="relative">
            <Slider></Slider>

            <div className="flex my-40 items-center">
                <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <img className="w-9/12 rounded-2xl" src={img} alt="" />
                </div>

                <h2 className="text-5xl font-semibold">Learn to code like a professional.
                </h2>
            </div>
            <div className="flex my-40 items-center justify-between">
                <h2 className="text-5xl font-semibold w-full">Learn to code like a professional.
                </h2>
                <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <img className=" rounded-2xl" src={img} alt="" />
                </div>


            </div>

            <div>

                <h2 className="text-center text-3xl font-medium">Our Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-32">
                    {
                        services.slice(0, 6).map(service =>
                            <div key={service.id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img className="h-64 w-full" src={service.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{service.title}</h2>
                                        <p className="font-normal border-b-2">{service.teacher}</p>
                                        <div className="card-actions ">
                                            <Link to={`/event/${service.id}`}
                                                className="btn w-full btn-primary">See Details
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;