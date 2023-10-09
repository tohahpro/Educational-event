
// import banner from '../../assets/Images/our-works.jpg';
const Banner = () => {
    return (
        <div className="h-[100vh]  w-full bg-center bg-cover custom-img ">
            <div className="h-[100vh] bg-black/70">
                <h2 className="lg:text-5xl z-[30] text-white font-semibold flex justify-center pt-[16rem] px-8 lg:px-0 text-center  lg:pt-96 pb-12">
                    The Best Event Management Agency for Education </h2>
                <p className="text-white text-center text-xs px-4 lg:text-base lg:font-medium lg:w-[65rem] mx-auto z-[10]">{` We specialize in crafting exceptional learning experiences, from enriching training programs to empowering educational events. With a passion for knowledge and a flair for detail, we transform ideas into vibrant, engaging gatherings. Our dedicated team ensures every event is a seamless journey, from inception to execution. Whether you're organizing workshops, seminars, or online learning adventures, trust us to make it extraordinary.`}</p>
            </div>

        </div>
    );
};

export default Banner;