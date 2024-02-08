import { useEffect, useState, useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoimg from '../../public/image/logo.png';
import { BsMoon, BsSun } from 'react-icons/bs';

const NAV_LINKS = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Me' },
    { id: 'courses', name: 'Courses' },
    { id: 'features', name: 'Features' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'career', name: 'Career' },
    { id: 'contact', name: 'Contact' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const navRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const navHeight = navRef.current.offsetHeight;

        // Get the positions of each section
        const sectionPositions = NAV_LINKS.reduce((positions, { id }) => {
            const element = document.getElementById(id);
            if (element) {
                positions[id] = element.offsetTop - navHeight;
            }
            return positions;
        }, {});

        // Find the current active section based on scroll position
        let currentActiveLink = 'home';
        for (const [id, position] of Object.entries(sectionPositions)) {
            if (scrollPosition >= position) {
                currentActiveLink = id;
            } else {
                break;
            }
        }

        setActiveLink(currentActiveLink);

        // Update hasScrolled state
        if (scrollPosition > 0) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
        toggleMenu();
    };

    const handleLinkClick = (id) => {
        setActiveLink(id);
    };

    return (
        <nav ref={navRef} className={`px-5 fixed z-10 w-full ${hasScrolled ? 'bg-yellow-100 bg-opacity-90' : ''}`}>

            <div className="mx-auto flex justify-between items-center">
                <div className="text-black lg:flex lg:items-center text-2xl lg:-mt-0 -mt-4 font-salsa">
                    <img className='w-48 lg:mt-0 md:mt-5 mt-5 -ml-10 md:-ml-4' src={logoimg} alt="" />
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex mr-10 ${isOpen ? '' : 'hidden lg:block'}`}>
                    <ul className="flex space-x-10 font-salsa">
                        {NAV_LINKS.map(({ id, name }) => (
                            <li key={id} className="text-black text-lg cursor-pointer">
                                <ScrollLink
                                    className={id === activeLink ? "active-link" : ""}
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    duration={10}
                                    onClick={() => { toggleMenu(); handleLinkClick(id); }}
                                >
                                    {name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:flex items-center">
                    <button onClick={handleThemeSwitch} className="text-black text-2xl mr-4">
                        {theme === 'dark' ? <BsSun /> : <BsMoon />}
                    </button>
                    <button className="bg-transparent text-white font-semibold bg-yellow-400 hover:bg-yellow-600 py-2 px-4 border rounded ml-4 border-none rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                        Login
                    </button>
                    <button className="bg-transparent text-yellow-600 font-semibold py-2 px-4 border-2 border-yellow-500 rounded ml-4 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                        Sign Up
                    </button>
                </div>
            </div>

            <div className={`lg:hidden fixed inset-0 bg-yellow-300 w-3/4 z-50 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
                <div className={`flex justify-end p-4`}>
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className={`p-4`}>
                    <button onClick={handleThemeSwitch} className="text-black text-2xl mr-4">
                        {theme === 'dark' ? <BsSun /> : <BsMoon />}
                    </button>
                    <ul className="space-y-4">
                        {NAV_LINKS.map(({ id, name }) => (
                            <li key={id} className="text-black cursor-pointer">
                                <ScrollLink
                                    className={id === activeLink ? "active" : ""}
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={scrollToTop}
                                >
                                    {name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col mt-8 mr-10 space-y-4">
                        <button className="bg-transparent text-white font-semibold bg-yellow-400 hover:bg-yellow-600 py-2 px-4 border rounded ml-4 border-none rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                            Login
                        </button>
                        <button className="bg-transparent text-yellow-600 font-semibold py-2 px-4 border-2 border-yellow-500 rounded ml-4 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none shadow-md ">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
