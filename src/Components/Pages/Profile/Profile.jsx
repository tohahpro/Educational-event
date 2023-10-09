import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="bg-[#252B48]">

            <div className="flex justify-center py-40">

                {
                    user ?
                        <div className='max-w-2xl mx-auto border shadow-lg p-8 rounded-xl w-5/6 h-96 bg-slate-100'>
                            <div className="flex justify-center">
                                <img className="w-24 rounded-full" src={user.photoURL} alt="" />
                            </div>

                            <div className="mt-8 space-y-4">
                                <p className="text-center text-lg font-semibold">Name : <span className="font-medium">{user.displayName}</span></p>
                                <p className="text-center text-lg font-semibold">Email : <span className="font-medium">{user.email}</span></p>
                                <p className="text-center text-lg font-semibold">Profile-Id : <span className="text-red-400"> {user.metadata.createdAt}</span></p>
                            </div>




                        </div> :
                        ''
                }

            </div>
        </div>
    );
};

export default Profile;