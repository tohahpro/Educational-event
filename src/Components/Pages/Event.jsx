import { Link, useLoaderData } from "react-router-dom";
import { GrLocation } from 'react-icons/gr';
import { BsCurrencyDollar } from 'react-icons/bs';


const Event = () => {
    const services = useLoaderData()
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  my-32">
                {
                    services.map(service =>
                        <div key={service.id}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-64 w-full" src={service.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.title}</h2>
                                    <div className="flex justify-between">
                                        <div className="flex gap-1 items-center">
                                            <GrLocation className="font-medium text-base"></GrLocation>
                                            <p className="text-base font-medium"> Location : <span className="text-lg font-semibold text-red-500">{service.location}</span></p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <BsCurrencyDollar className="font-medium text-base"></BsCurrencyDollar>
                                            <p className="text-base font-medium"> Price : <span className="text-lg font-semibold text-red-500">{service.price}</span></p>
                                        </div>
                                    </div>
                                    <div className="card-actions ">
                                        <Link to={`/eventDetails/${service.id}`}
                                            className="btn w-full btn-primary">Event Details
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