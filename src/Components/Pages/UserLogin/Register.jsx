import { useContext, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import SocialRegister from './SocialRegister';


const Register = () => {


    const [showPassword, setShowPassword] = useState(false)
    const { createUser, userUpdate } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const image = e.target.image.value
        const password = e.target.password.value
        console.log(name, email, image, password);

        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            return toast.error("The minimum length for passwords is six characters, including a capital letter and a special character.")
        }

        createUser(email, password)
            .then(res => {
                userUpdate(name, image)
                    .then(() => {

                    })
                if (res.user) {
                    toast.success('Register successful')
                    navigate('/')
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
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
                    <SocialRegister></SocialRegister>

                </div>

            </form>


        </div>
    );
};

export default Register;