import teacherImg from '../../public/image/teacher.png'
import { FiArrowRight } from 'react-icons/fi';
const Teachers = () => {
    return (
        <div id='career' className="flex lg:flex-row md:flex-col flex-col justify-around items-center px-24 gap-4 lg:-mt-10 mt-5 ">
            <div className="flex-1">
                <h1 className="text-4xl text-center mt-8 pt-5 font-semibold text-gray-700 mb-5">If You Are a Certified Teacher Then  <span className="text-yellow-400">Become An Instructor</span></h1>
                <p className='mb-5'>Are you a certified teacher or an expert in your field? Share your knowledge and passion by becoming an instructor with us! Join our team of educators and empower learners around the world to achieve their goals. Whether {"you're"} an experienced educator or a subject matter expert, we provide the platform and support you need to create engaging and impactful online courses. Join our community of instructors today and make a difference in the lives of students everywhere.</p>

                <button className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded flex items-center gap-1">
                    Become an Instructor
                    <FiArrowRight />
                </button>


            </div>
            <div className=" relative bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-t-full lg:mx-20 md:mx-0 mx-0 lg:my-36 md:my-20 my-16 border outline-yellow-500 outline-dotted outline-offset-4">
                <img data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className='w-80 mx-auto' src={teacherImg} alt="" />
            </div>

        </div>
    );
};

export default Teachers;