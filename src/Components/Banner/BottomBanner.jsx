

const BottomBanner = () => {
    return (
        <div className="h-[40vh] w-full bg-center bg-cover bottom-img ">
            <div className="h-[40vh] bg-black/50">
                <h2 className="text-2xl lg:text-5xl text-center font-semibold pt-24 text-white lg:w-[40rem] mx-auto">{`Let's Make Your Event Memorable!`}</h2>
                <p className="lg:w-[50rem] mx-auto text-center pt-4 text-xs px-2 lg:p-0 lg:text-sm font-normal text-white"> {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
            </div>

        </div>
    );
};

export default BottomBanner;