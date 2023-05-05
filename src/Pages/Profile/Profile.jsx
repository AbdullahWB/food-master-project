import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        updateUser(name, photo)
            .then()
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }
    return (
        <div className='w-[80%] mx-auto my-[130px] gap-10 grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
                <h1 className='text-3xl font-semibold text-primary mb-5'>Profile Information</h1>
                <div className='md:flex bg-orange-100 p-5 rounded-lg'>
                    <img className='w-40 rounded-xl' src={user.photoURL} alt="" />
                    <div className='md:ml-5 mt-10 md:mt-0'>
                        <h1 className='md:text-2xl'>Name: {user.displayName}</h1>
                        <p className='md:text-xl'>Email: {user.email}</p>
                    </div>
                </div>

                <div className='md:w-[60%] p-10 border-2 mt-10 rounded-lg border-primary'>
                    <form onSubmit={handleUpdate}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type='text' name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="photo" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo</label>
                        </div>
                        <button type="submit" className="btn mt-5 mb-5 btn-primary w-[30%] text-white">Update</button>
                    </form>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-full h-full' src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/auth/09.png" alt="" />
            </div>
        </div>
    );
};

export default Profile;