import { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoimg from '../../public/image/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }

        const homeOffset = document.getElementById('home').offsetTop;
        const aboutOffset = document.getElementById('about').offsetTop;
        const coursesOffset = document.getElementById('courses').offsetTop;
        const featuresOffset = document.getElementById('features').offsetTop;
        const testimonialsOffset = document.getElementById('testimonials').offsetTop;
        const careerOffset = document.getElementById('career').offsetTop;
        const contactOffset = document.getElementById('contact').offsetTop;


        if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
            setActiveLink('home');
        } else if (scrollPosition >= aboutOffset && scrollPosition < coursesOffset) {
            setActiveLink('about');
        } else if (scrollPosition >= coursesOffset && scrollPosition < featuresOffset) {
            setActiveLink('courses');
        } else if (scrollPosition >= featuresOffset && scrollPosition < testimonialsOffset) {
            setActiveLink('features');
        } else if (scrollPosition >= testimonialsOffset && scrollPosition < careerOffset) {
            setActiveLink('testimonials');
        } else if (scrollPosition >= careerOffset && scrollPosition < contactOffset) {
            setActiveLink('career');
        } else if (scrollPosition >= contactOffset) {
            setActiveLink('contact');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
        toggleMenu();
    };

    return (
        <nav className={`px-5 fixed z-10 w-full ${hasScrolled ? 'bg-yellow-100 bg-opacity-90  ' : ''}`}>
            <div className="mx-auto flex justify-between items-center">
                <div className="text-black lg:flex lg:items-center text-2xl lg:-mt-0 -mt-4 font-salsa">
                    <img className='w-48 lg:mt-0 md:mt-5 mt-5 -ml-10 md:-ml-4' src={logoimg} alt="" />
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            className="h-10 w-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex mr-10 ${isOpen ? 'hidden' : 'hidden lg:block'}`}>
                    <ul className="flex space-x-10 font-salsa">
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('home');
                                }}
                                className={activeLink === 'home' ? 'active-link text-yellow-500' : ''}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('about');
                                }}
                                className={activeLink === 'about' ? 'active-link' : ''}
                            >
                                About Me
                            </ScrollLink>
                        </li>
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="courses"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('courses');
                                }}
                                className={activeLink === 'courses' ? 'active-link' : ''}
                            >
                                Courses
                            </ScrollLink>
                        </li>
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="features"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('features');
                                }}
                                className={activeLink === 'features' ? 'active-link' : ''}
                            >
                                Features
                            </ScrollLink>
                        </li>
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('testimonials');
                                }}
                                className={activeLink === 'testimonials' ? 'active-link' : ''}
                            >
                                Testimonials
                            </ScrollLink>
                        </li>
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="career"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('career');
                                }}
                                className={activeLink === 'career' ? 'active-link' : ''}
                            >
                                Career
                            </ScrollLink>
                        </li>
                        <li className="text-black text-lg cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActiveLink('contact');
                                }}
                                className={activeLink === 'contact' ? 'active-link' : ''}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex items-center">
                    <button className="bg-transparent  text-white  font-semibold bg-yellow-400 hover:bg-yellow-600 py-2 px-4 border  rounded ml-4 border-none rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                        Login
                    </button>
                    <button className="bg-transparent text-yellow-600   font-semibold  py-2 px-4 border-2 border-yellow-500  rounded ml-4 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                        Sign Up
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden fixed inset-0 bg-yellow-300 w-1/2 z-50 ${isOpen ? 'block' : 'hidden'
                    }`}
                onClick={(e) => toggleMenu(e)}
            >
                <div className={`flex justify-end p-4`}>
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            className="h-8 w-8 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`p-4`}
                >
                    <ul className="space-y-4">
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={scrollToTop}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="courses"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Courses
                            </ScrollLink>
                        </li>
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="features"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Features
                            </ScrollLink>
                        </li>
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Testimonials
                            </ScrollLink>
                        </li>
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="career"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Career
                            </ScrollLink>
                        </li>
                        <li className="text-black cursor-pointer">
                            <ScrollLink
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                    <div className="flex flex-col mt-8 mr-10 space-y-4">
                        <button className="bg-transparent  text-white  font-semibold bg-yellow-400 hover:bg-yellow-600 py-2 px-4 border  rounded ml-4 border-none rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                            Login
                        </button>
                        <button className="bg-transparent text-yellow-600   font-semibold  py-2 px-4 border-2 border-yellow-500  rounded ml-4 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                            Sign Up
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
