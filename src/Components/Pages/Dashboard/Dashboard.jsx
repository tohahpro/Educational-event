import { useEffect, useState } from "react";


const Dashboard = () => {

    const [bookingItems, setBookingItems] = useState([])
    const [noDataFound, setNoDataFound] = useState(false)

    useEffect(() => {
        const bookingItem = JSON.parse(localStorage.getItem('booking') || "[]")
        if (bookingItem.length > 0) {
            setBookingItems(bookingItem)
        } else {
            setNoDataFound('There is no data for this since you did not donate.')
        }

    }, [])

    return (
        <div>
            {
                noDataFound ?
                    <p className="flex items-center justify-center h-[80vh] text-sm  md:text-xl font-bold">{noDataFound}</p>
                    :
                    <div>
                        <h2 className="text-center py-12">Your event Booking</h2>
                        <div className="grid lg:grid-cols-2 my-40 max-w-screen-xl mx-auto gap-4">
                            {
                                bookingItems.map(item =>
                                    <div key={item.id}>
                                        <div className="card  md:card-side bg-base-100 shadow-xl mx-4">
                                            <figure><img className="h-full w-full md:w-72 object-cover" src={item.image} alt="Album" /></figure>
                                            <div className="card-body md:rounded-r-2xl" style={{ background: `${item.card_bg_color}` }}>
                                                <div className="flex items-center justify-between  py-4">
                                                    <div className="flex items-center -space-x-3 ">
                                                        <div
                                                            data-tooltip="author-2"
                                                            className=" whitespace-normal break-words rounded-lg  py-1.5 px-3 font-sans text-sm font-medium focus:outline-none"

                                                        >
                                                            {item.category}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="md:text-xl md:font-semibold">{item.title}</p>
                                                <span className="md:text-base md:font-semibold">$ {item.price}.00</span>

                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>

            }
        </div>
    );
};

export default Dashboard;