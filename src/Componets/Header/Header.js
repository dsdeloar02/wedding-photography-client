import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isShown, setIsShown] = useState(false);
    const [open, setOpen] = useState(false)
 


    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }

    console.log(user?.displayName)

    return (
        <div className='shadow-md' >
            <div className="container w-5/6 md:w-full mx-auto md:flex justify-between py-6">
                <div className='flex items-center text-slate-600 w-[300px]'>
                    <NavLink to='/'>
                        <h1  className='font-bold  md:text-xl lg:text-2xl' >Photography</h1>
                    </NavLink>
                </div>


        

                <div onClick={() =>setOpen(!open)} className="absolute right-4 top-6 cursor-pointer md:hidden" >
                    {
                        open ? <XMarkIcon className="h-7 w-7 text-red-500 "/> :  <Bars3Icon className="h-7 w-7 text-red-500" /> 
                    }           
                </div>

                <ul
                   className={`bg-orange-500 md:bg-transparent py-5 md:py-0 md:flex md:justify-end md:items-center absolute w-full left-0 md:static  transition-all duration-500 ease-in z-50 ${open ? 'top-20' : 'top-[-500px]'}  `} 
                 
                 >
                    <li className='mx-2 py-2 px-2 lg:px-4 hover:bg-orange-400'>
                        <NavLink to='/blogs' >Blogs</NavLink>
                    </li>
                    <li className='mx-2 '>
                       {
                        user?.uid? 
                        <div className='flex flex-col md:flex-row relative'>
                            <li className='mx-2 py-2 px-2 lg:px-4 hover:bg-orange-400'>
                                <NavLink to='/myreview' >My Review</NavLink>
                            </li>
                            <li className='mx-2 py-2 px-2 lg:px-4 hover:bg-orange-400'>
                                <NavLink to='/service/add' >Add Service</NavLink>
                            </li>

                            <button className='px-2 py-3 md:py-0 mr-2 mt-2 md:mt-0 bg-black text-white' onClick={handleLogOut} >Log Out </button>
                            <button 
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                            >
                                <img src={user?.photoURL} alt="" className='h-10 w-10 mx-3 rounded-full' />
                            </button>
                            <div className='absolute top-12 right-0'>
                                {
                                    isShown && 
                                    <div>
                                        <p className='bg-red-500 rounded-lg py-1 px-2 ' >{user?.displayName}</p>                                        
                                    </div>
                                }
                            </div>
                            
                        </div>
                        
                        
                        :  <NavLink to='/login' className='bg-[#6419E6] py-2 px-4 mt-6 md:mt-0' >Log In</NavLink>
                       }
                    </li>

                    
                </ul>
            </div>
        </div>
    );
}

export default Header;
