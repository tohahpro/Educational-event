import img1 from '../../../assets/Images/client-logo-1.png'
import img2 from '../../../assets/Images/client-logo-2.png'
import img3 from '../../../assets/Images/client-logo-3.png'
import img4 from '../../../assets/Images/client-logo-4.png'

const Sponsors = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-5 border'>
                <div className='py-6 flex justify-center px-2 hover:shadow-xl hover:bg-base-100 border-r'>
                    <img src={img1} alt="" />
                </div>
                <div className='py-6 flex justify-center px-2 hover:shadow-xl hover:bg-base-100 border-r'>
                    <img src={img2} alt="" />
                </div>
                <div className='py-6 flex justify-center px-2 hover:shadow-xl hover:bg-base-100 border-r'>
                    <img src={img3} alt="" />
                </div>
                <div className='py-6 flex justify-center px-2 hover:shadow-xl hover:bg-base-100 border-r'>
                    <img src={img4} alt="" />
                </div>
                <div className='py-6 flex justify-center px-2 hover:shadow-xl hover:bg-base-100'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;