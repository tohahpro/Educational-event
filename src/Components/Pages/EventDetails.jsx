import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {

    const allServices = useLoaderData()
    const { id } = useParams()
    const IdInt = parseInt(id)

    const [service, setService] = useState('')

    useEffect(() => {
        const findService = allServices.find(service => service.id === IdInt)
        setService(findService)

    }, [allServices, IdInt])


    return (
        <div>
            <div className="card card-compact w-4/5 h-2/4 mx-auto rounded-none my-20">
                <figure><img className="h-2/4 w-full" src={service.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{service.title}</h2>
                    <p className="text-justify text-lg">{service.description}</p>
                    <div className="card-actions ">

                        <button className="btn btn-wide text-white btn-primary">Booked Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;