import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    // const [loginError, setLoginError] = useState('')
    // const [success, setSuccess] = useState('')

    return (
        <div>
            <h2 className="text-center text-4xl font-semibold pt-32 mb-16">LogIn Form</h2>

            <form >
                <div className='max-w-2xl mx-auto border shadow-lg p-8 rounded-xl '>

                    {/* email field  */}
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="email" placeholder='email' required />
                    </div>
                    {/* password field  */}
                    <div>
                        <label htmlFor="">Password</label><br />
                        <div className='flex relative'>
                            <input className='border w-full rounded-md p-2 my-2 ' type={showPassword ? 'text' : 'password'} name="password" placeholder='password' required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-2 text-lg" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="btn w-full p-2 rounded-lg" />

                    <p className='mt-2'>New Here ? Please  <Link to='/register'>
                        <span className='text-blue-600'>
                            <span className='underline'>Register</span>
                        </span>
                    </Link>

                    </p>
                    {/* <SocialLogin></SocialLogin> */}

                    {/* {
                        loginError ?
                            <p className='mt-2 text-red-600 text-base font-medium text-center'>{loginError}</p> : ''
                    }

                    {
                        success ?
                            <p className='mt-2 text-green-600 text-base font-medium text-center'>{success}</p> : '' */}
                    {/* } */}
                </div>

            </form>




        </div>
    );
};

export default Login;