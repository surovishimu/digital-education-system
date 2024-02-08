const Contact = () => {
    return (
        <div id="contact" className="-mt-10 rounded-2xl w-full md:w-1/2 mx-auto text-center bg-gradient-to-r from-yellow-200 to-yellow-300 p-8 mb-8 ">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch!</h1>
            <p className="text-gray-700 mb-4">Subscribe to stay updated with the latest news, discounts, promos, and much more!</p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <input type="email" name="email" id="email" placeholder="Enter Your Email" className="rounded-md py-2 px-4 mb-2 md:mb-0 md:mr-2 w-full md:w-auto max-w-sm bg-white" />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">Subscribe</button>
            </div>
        </div>
    );
};

export default Contact;
