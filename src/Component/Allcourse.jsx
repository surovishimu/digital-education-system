import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FiArrowLeft } from "react-icons/fi"; 
import Course from "./Course";

const Allcourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            
            <Link to="/" className="absolute top-4 left-4 flex items-center text-yellow-500">
                <FiArrowLeft className="mr-2 text-yellow-500" />
                Go to Home
            </Link>
            <div>
                <h1 className="text-4xl text-center mt-8 pt-5 font-semibold text-gray-700">Discover Our Top <span className="text-yellow-400">Courses</span></h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-5">
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Allcourse;
