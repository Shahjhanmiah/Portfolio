
import { Typewriter,Cursor } from 'react-simple-typewriter'
import img1 from '../assets/my-bg2 (2).png'
import { FaSquareGithub,  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Home = () => {
    const text =   Typewriter({
        words:['Web Developer','Mern Stack Developer','React Developer'],
        loop:{}
       
    })
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                 <div className='pt-20 ml-10'>
                    <h1 className='text-5xl font-semibold' style={{margin:'50px'}}>
                       <p className='text-primary text-2xl'>Hi !</p>
                       
                       <p>I’M SHAHJHAN MIAH</p>
                        I am    

                        <span style={{fontWeight:'bold',color:'orange'}}>
                            {text}

                            <span style={{color:'red'}}>
                            <Cursor cursorStyle='>'></Cursor>
                        </span>
                         
                        </span>
                        <Link to={'/https://github.com/Shahjhanmiah'}> <FaSquareGithub></FaSquareGithub></Link>
                       
                    </h1>
                 </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left  pt-10">
                       
                    <figure><img className='pt10 pr-10 mr-10' src={img1} alt="Shoes" /></figure>
                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;