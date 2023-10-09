import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const EventDetails = () => {

    const allServices = useLoaderData()
    const { id } = useParams()
    const IdInt = parseInt(id)

    const [service, setService] = useState('')

    useEffect(() => {
        const findService = allServices.find(service => service.id === IdInt)
        setService(findService)

    }, [allServices, IdInt])



    const handleBooked = () => {
        const addBookingArray = []
        const bookingItem = JSON.parse(localStorage.getItem('booking'))
        if (!bookingItem) {
            addBookingArray.push(service)
            localStorage.setItem('booking', JSON.stringify(addBookingArray))
            toast.success('Booking successful')
        } else {

            const isExist = bookingItem.find(item => item.id === service.id)
            if (!isExist) {
                addBookingArray.push(...bookingItem, service)
                localStorage.setItem('booking', JSON.stringify(addBookingArray))
                toast.success('Booking successful')
            }
            else {
                toast.error('Already Exists.')
            }

        }
    }


    return (
        <div className="bg-[#252B48] pt-60 pb-40">
            <div className=" gap-16 lg:w-[1450px] mx-auto border  rounded-xl shadow-xl shadow-stone-800">
                <div className="flex-1">
                    <img className="rounded-t-xl" src={service.image} alt="" />
                </div>
                <div className="text-white flex-1 p-4 space-y-5">

                    <h2 className="text-2xl font-bold ">{service.title}</h2>
                    <p className="flex text-justify  pr-12">{service.description}</p><br />
                    <p className="text-white"><span className="text-lg font-semibold">High-Speed Internet :</span> {service.service1}</p>
                    <p><span className="text-lg font-semibold">Technical Support :</span> {service.service2}</p>
                    <p><span className="text-lg font-semibold">Event Marketing :</span> {service.service3}</p>
                    <p><span className="text-lg font-semibold">Networking Opportunities :</span> {service.service4}</p>
                    <p><span className="text-lg font-semibold">Catering Services :</span> {service.service5}</p>



                    <p className="text-xl font-semibold">Booking Price : <span className="text-red-400"> {service.price}</span> $</p>

                    <button onClick={handleBooked} className="btn flex items-center">Booking Now <BsArrowRight className="text-lg font-semibold"></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;