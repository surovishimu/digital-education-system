import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    // Function to render limited number of cards
    const renderCourses = () => {
        const limitedCourses = courses.slice(0, 4); // Display only 4 courses initially
        return limitedCourses.map(course => (
            <Course key={course.id} course={course} />
        ));
    };

    return (
        <div id='courses' className="bg-yellow-50 px-10 py-10 lg:mt-0 md:mt-36 mt-10">
            <div>
                <h1 className="text-4xl text-center mt-8 pt-5 font-semibold text-gray-700">Discover Our Top <span className="text-yellow-400">Courses</span></h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-5">

                {renderCourses()}
            </div>
            <div className="text-center mt-20">

                <Link to="/all-courses" className="text-yellow-500 text-xl hover:underline">
                    See More
                </Link>
            </div>
        </div>
    );
};

export default Courses;

