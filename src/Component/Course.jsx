import { FaDollarSign, FaBookOpen, FaStar, FaUsers } from 'react-icons/fa'; // Import FaUsers icon

const Course = ({ course }) => {
    const {
        name,
        total_students,
        rating,
        image_url,
        price,
        description,
        credit_hour
    } = course;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div  data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="h-full">

            <div className="card bg-base-100 shadow-xl mt-10 h-full flex flex-col justify-between transition-transform transform-gpu hover:scale-105 rounded-none">
                <figure className="px-5 pt-4 flex-none h-48">
                    <img src={image_url} alt="Course" className="rounded-sm h-full w-full object-cover" />
                </figure>
                <div className="card-body text-start px-5 flex-grow flex flex-col">
                    <div>
                        <h2 className="text-md font-bold">{name}</h2>
                        <small className='text-stone-400'>{description}</small>
                    </div>
                    <div className="mt-3 flex justify-between items-center -mb-10">
                        <small className='text-stone-400'><FaDollarSign className='inline text-lg text-gray-700'></FaDollarSign> Price: ${price}</small>
                        <br />
                        <small className='text-stone-400'><FaBookOpen className='inline mr-2 text-gray-700 text-lg'></FaBookOpen>Credit: {credit_hour}hr</small>
                    </div>
                    <div className="flex items-center mt-auto">
                        <span className="text-yellow-500 flex items-center">
                            {renderStars(rating)}

                        </span>
                        <span className="ml-4 text-stone-400 flex items-center"><FaUsers className="ml-14 text-lg text-gray-700 mr-1" />{total_students}</span>
                    </div>
                </div>

                <div className="card-actions flex-none px-5 pb-5">
                    <button className="btn bg-yellow-300 text-lg text-white normal-case w-full hover:bg-yellow-500">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;
