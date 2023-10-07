import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const SocialLogin = () => {

    // google SignIn context
    const { googleLogin, gitHubLogin } = useContext(AuthContext)


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res.user)
            })
            .catch(error => console.error(error))
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