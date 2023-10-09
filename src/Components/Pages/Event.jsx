import { Link, useLoaderData } from "react-router-dom";
import { GrLocation } from 'react-icons/gr';



const Event = () => {
    const services = useLoaderData()
    return (
        <div className="">
            <div className="h-[60vh] lg:h-[80vh] w-full bg-center bg-cover event-img">
                <div className="h-[60vh] lg:h-[80vh] bg-black/50">
                    <h2 className="text-xl lg:text-4xl z-[30] text-white font-semibold flex justify-center items-center h-[80vh]">Inspiring Events for Lifelong Learners</h2>

                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  my-32 max-w-screen-xl mx-auto">
                {
                    services.map(service =>
                        <div key={service.id}>
                            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
                                <figure><img className="w-full" src={service.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title flex justify-center">{service.title}</h2>

                                    <div className="flex gap-1 items-center mx-auto">
                                        <GrLocation className="font-medium text-lg"></GrLocation>
                                        <p className="text-base font-medium text-center"> Location : <span className="text-lg font-semibold text-red-500">{service.location}</span></p>
                                    </div>

                                    <div className="card-actions ">
                                        <Link to={`/eventDetails/${service.id}`}
                                            className="btn w-full bg-black text-white">See More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Event;