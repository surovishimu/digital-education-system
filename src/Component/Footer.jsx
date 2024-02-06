import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import logoimg from '../../public/image/logo.png';
const Footer = () => {
    return (
        <footer className="mt-20 p-10 text-neutral-content bg-yellow-100">

            <div className="footer flex lg:flex-row md:flex-col flex-col justify-between px-24 items-center">
                <div className="md:text-left text-center ">
                    <img className="h-36 w-60" src={logoimg} alt="" />
                    <h1 className="font-serif text-md text-gray-700">
                        <span className="text-2xl font-semibold text-yellow-500"> Edu Puls</span> <br />
                        Empowering Minds, Transforming Futures.
                    </h1>
                    <div className="grid grid-flow-col gap-4 md:mx-0 mx-auto">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="cursor-pointer fill-current bg-yellow-400 rounded-full h-10 w-10 p-1">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="bg-yellow-400 rounded-full cursor-pointer h-10 w-10 p-2 fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="bg-yellow-400 rounded-full cursor-pointer h-10 w-10 p-2 fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h1 className="mx-auto text-lg font-serif font-semibold text-gray-700">
                        <IoLocationOutline className="mx-auto h-10 w-10 text-yellow-500" />
                        Postal Address
                    </h1>
                    <p className="text-center font-semibold text-gray-700">
                        Edu Puls <br />
                        Suite 200, Plaza Building, <br />
                        123 Main Street,<br />
                        Cityville, Countryland <br />
                        Postal Code: 54321
                    </p>
                </div>

                <div>
                    <h1 className="mx-auto text-lg font-serif font-semibold text-gray-700">
                        <FiPhone className="mx-auto h-10 w-10 text-yellow-500" />
                        Phone & E-mail
                    </h1>
                    <h4 className="mx-auto font-semibold text-gray-700">Phone: 098794 65656</h4>
                    <h2 className="mx-auto font-semibold text-gray-700">edupuls@gmail.com</h2>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500">
                <small><p>Copyright © 2024 - All rights reserved by Edu Puls</p></small>
            </div>
        </footer>
    );
};

export default Footer;
