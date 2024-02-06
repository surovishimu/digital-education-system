const Review = ({ review }) => {
    const { studentName, image, rating, course, studentsSay } = review;
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-96 lg:h-full h-96 mx-auto text-center mt-10">
            <img className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mt-4 border border-gray-700 rounded-full object-cover object-center transition duration-300 transform hover:scale-105" src={image} alt={studentName} />
            <div className="p-4 flex flex-col justify-center">
                <h2 className="font-bold text-lg mb-2">{studentName}</h2>
                <p className="text-gray-600 text-sm mb-2">{course}</p>
                <div className="flex items-center justify-center mb-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 fill-current ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path fillRule="evenodd" d="M11.999 2.22c.276 0 .517.161.631.408l1.56 3.31 3.508.539c.3.046.421.449.195.676l-2.532 2.605.597 3.672c.05.305-.256.547-.528.382l-3.118-1.73-3.117 1.73c-.272.15-.577-.077-.528-.382l.597-3.672-2.532-2.605c-.226-.227-.105-.63.195-.676l3.508-.539 1.56-3.31c.114-.247.355-.408.63-.408z" />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-700 text-sm">{studentsSay}</p>
            </div>
        </div>
    );
};

export default Review;
