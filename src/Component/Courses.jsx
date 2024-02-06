import { useEffect, useState } from "react";
import Course from "./Course";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div id='courses'  className="bg-yellow-50 px-10 py-10">
            <div>
                <h1 className="text-4xl text-center mt-8 pt-5 font-semibold text-gray-700">Discover Our Top <span className="text-yellow-400">Courses</span></h1>
            </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-5">

                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >

                    </Course>)
                }
            </div>
        </div>
    );
};

export default Courses;