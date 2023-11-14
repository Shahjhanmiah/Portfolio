
import { Typewriter, Cursor } from 'react-simple-typewriter'
import img1 from '../assets/my-bg2 (2).png'
import { FaSquareGithub, } from "react-icons/fa6";
import '../Component/Home.css'
import { useState } from 'react';
const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const text = Typewriter({
        words: ['Web Developer', 'Mern Stack Developer', 'React Developer'],
        loop: {}

    })
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className='pt-20 ml-10'>
                        <h1 className='text-5xl font-semibold' style={{ margin: '50px' }}>
                            <p className='text-primary text-2xl'>Hi !</p>

                            <p>I’M SHAHJHAN MIAH</p>
                            I am

                            <span style={{ fontWeight: 'bold', color: 'orange' }}>
                                {text}

                                <span style={{ color: 'red' }}>
                                    <Cursor cursorStyle='>'></Cursor>
                                </span>

                            </span>
                            
                        </h1>
                        <div className='text-5xl'>
                        <div className= {`icon-container ${isHovered ? 'hovered' : ''}`}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                               < FaSquareGithub></FaSquareGithub>
                               
                            </div>
                    </div>
                        </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left  pt-10">

                        <figure> <div className="image-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <img src={img1} alt="Image" className={isHovered ? 'hovered' : ''} />
                        </div></figure>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;