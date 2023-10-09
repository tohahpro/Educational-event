import logo from '../../assets/Images/Logo-color-removebg-preview.png'

const Logo = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-24' src={logo} alt="" />
                <p className='text-2xl text-white font-semibold'>Aventri</p>
            </div>
        </div>
    );
};

export default Logo;