
import { Link } from 'react-router-dom';
import errorImg from '../../assets/Images/error-404.jpg'
const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <img src={errorImg} alt="" /> <br />

                <div className='flex justify-center'>

                    <Link to='/'><button className='bg-red-500 text-white font-semibold text-xl rounded p-2'>Back Home</button></Link>
                </div>

            </div>


        </div>
    );
};

export default ErrorPage;