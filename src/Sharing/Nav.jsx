
import { Bars3BottomRightIcon, BookOpenIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import useLocalStorage from 'use-local-storage'
const Nav = () => {



    let Links = [


        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "SKILL", link: "/" },
        { name: "PROJECT", link: "/" },
        { name: "BLOCK", link: "/" },
        { name: "CONTACK", link: "/" },
        






    ];

    let [open, setOpen] = useState(false);


    return (
        <div className='shadow-full w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600' />
                    <span >Shahjhan Miah</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
                                <Link to={`${link.link}`} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>

                            </li>))
                    }

                   


                </ul>


            </div>
        </div>
    )
}


export default Nav;