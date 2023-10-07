import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';


const Register = () => {


    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
    }


    return (
        <div>
            <h2 className="text-center text-4xl font-semibold pt-32 mb-16">Register Form</h2>

            <form onSubmit={handleRegister}>
                <div className='max-w-2xl mx-auto border shadow-lg p-8 rounded-xl'>
                    <div>
                        <label htmlFor="">Name</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="name" placeholder='Your Name' required />
                    </div>

                    {/* email field  */}
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="email" placeholder='email' required />
                    </div>
                    {/* image field  */}
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="image" placeholder='image' required />
                    </div>
                    {/* password field  */}
                    <div>
                        <label htmlFor="">Password</label><br />
                        <div className='flex relative'>
                            <input className='border w-full rounded-md p-2 my-2' type={showPassword ? 'text' : 'password'} name="password" placeholder='password' required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-2 text-xl" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                    </div>
                    <input type="submit" value="Register" className="btn bg-[#4A07DA] text-white w-full font-medium p-2 rounded-lg" />

                    <p className='mt-2'>Already have account ? Please  <Link to='/login'>
                        <span className='text-blue-600'>
                            <span className='underline'>Login</span>
                        </span>
                    </Link>

                    </p>
                    <SocialLogin></SocialLogin>

                    {/* {
                        registerError ?
                            <p className='mt-2 text-red-600 text-base font-medium text-center'>{registerError}</p> : ''
                    }
                    {
                        success ?
                            <p className='mt-2 text-green-600 text-base font-medium text-center'>{success}</p> : ''
                    } */}
                </div>

            </form>


        </div>
    );
};

export default Register;