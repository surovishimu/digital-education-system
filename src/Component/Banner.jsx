import { IoIosArrowDropright } from "react-icons/io";
import bannerimage from '../../public/image/banner1.png';
import { useEffect, useState } from "react";
import { LuPointer } from "react-icons/lu";
import bannerbg from '../../public/image/banner-bg.png'
const Banner = () => {
    const [buttons, setButtons] = useState([
        { text: "10k+ Active Students", show: true },
        { text: "Expert Instructor", show: false },
        { text: "Largest course collection", show: false }
    ]);
    const [showLuPointer, setShowLuPointer] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (buttons.findIndex(button => button.show) + 1) % buttons.length;
            const newButtons = buttons.map((button, index) => ({
                ...button,
                show: index === nextIndex
            }));
            setButtons(newButtons);
            setShowLuPointer(false);
        }, 2000);

        return () => clearInterval(interval);
    }, [buttons]);

    return (
        <div id='home' className='flex lg:flex-row flex-col lg:-space-y-0 -space-y-36 justify-center items-center pt-20' style={{ backgroundImage: `url(${bannerbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>

            <div className='flex flex-col justify-center items-center space-y-8 flex-1 lg:mt-0 mt-20'>
                <div className="">
                    <h1 className='text-5xl text-gray-600 font-semibold text-center '>
                        Study <span className="text-yellow-400">Smarter</span> <br /> not Harder
                    </h1>
                    <p className='w-2/3 text-center mx-auto mt-4 text-gary-600 text-lg'>
                        Elevate Your Learning Experience with Advanced Strategies and Techniques for Optimal Achievement
                    </p>
                </div>
                <div className='flex gap-5 relative'>
                    <button className='btn hover:text-white bg-white rounded border-yellow-400 hover:bg-yellow-400 text-yellow-500 text-lg rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none shadow-xl shadow-yellow-100 '>
                        <a className="flex gap-2 items-center" href="#" target='_blank' rel="noopener noreferrer">
                            Live Bootcamps <IoIosArrowDropright className="text-2xl" />
                        </a>

                    </button>
                    {showLuPointer && <LuPointer data-aos="fade-up" data-aos-duration="2000" className="absolute text-4xl text-yellow-500 -bottom-7 right-0" />}
                </div>
            </div>

            <div className='relative lg:pt-0 md:pt-36 pt-36'>
                <img className='lg:mt-12 md:mt-12 mt-32 mr-10' src={bannerimage} alt="" />
                {buttons.map((button, index) => (
                    button.show && (
                        <div key={index} className='absolute lg:left-80 left-52 lg:top-5 top-48 md:left-80 md:top-40'>
                            <button
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className="bg-transparent bg-yellow-400 text-black font-semibold py-2 px-4 border border-yellow-500 rounded ml-4 rounded-tr-full rounded-bl-none rounded-tl-full cursor-none w-28 h-28 rounded-br-full shadow-md lg:block  transform rotate-12"
                            >
                                {button.text}
                            </button>
                        </div>
                    )
                ))}

            </div>
        </div>
    );
};

export default Banner;
