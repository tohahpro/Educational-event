import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SocialRegister = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // google SignIn context
    const { googleLogin, gitHubLogin } = useContext(AuthContext)


    const handleSocialLogin = (media) => {


        media()
            .then(res => {

                if (res.user) {
                    toast.success('Register successful')
                }
                // navigate('/')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    return (
        <div>
            <div className="divider text-lg font-semibold">Continue With</div>
            <div className="flex gap-12">
                <div
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="py-2 px-4 flex items-center gap-1 border rounded-md hover:cursor-pointer">
                    <FcGoogle className="text-2xl"></FcGoogle> <span className="text-base font-medium">Google</span>
                </div>
                <div
                    onClick={() => handleSocialLogin(gitHubLogin)}
                    className="py-2 px-4 flex items-center gap-1 border rounded-md hover:cursor-pointer">
                    <FaGithub className="text-2xl"></FaGithub> <span className="text-base font-medium">Google</span>
                </div>
            </div>
        </div>
    );

};

export default SocialRegister;