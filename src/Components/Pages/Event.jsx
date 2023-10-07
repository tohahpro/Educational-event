import { Link, useLoaderData } from "react-router-dom";


const Event = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  my-32">
                {
                    services.map(service =>
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
    );
};

export default Event;