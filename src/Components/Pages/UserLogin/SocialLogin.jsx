import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";



const SocialLogin = () => {

    // google SignIn context
    const { googleLogin, gitHubLogin } = useContext(AuthContext)


    const handleSocialLogin = (media) => {


        media()
            .then(res => {
                console.log(res.user)
                if (res.user) {
                    toast.success('Register successful')
                }
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    return (
        <div>
            <div className="divider">Continue With</div>
            <div className="flex gap-12">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">
                    Google
                </button>
                <button
                    onClick={() => handleSocialLogin(gitHubLogin)}
                    className="btn btn-neutral btn-sm">
                    GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;