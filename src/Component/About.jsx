import { FaRegHeart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import phone1 from "../../public/image/phone1-backup.png"
import phone2 from "../../public/image/phone2-backup.png"
const About = () => {
    return (
        <div id="about" className="flex flex-col  md:flex-col lg:flex-row-reverse justify-between items-center px-10 gap-24 mt-20 dark:text-black">
            <div className="flex-1">
                <h3 className="bg-yellow-200 w-40 text-center p-2 rounded-3xl mb-2">Know About Us</h3>
                <h1 className="text-4xl mb-7 font-semibold text-gray-700">
                    Know About <span className="text-yellow-400">Edu Puls</span> Learning Platform
                </h1>
                <p className="mb-3 text-gray-700">

                    Edu Puls is a dynamic learning platform that offers interactive courses and personalized learning experiences. Our mission is to make education accessible, engaging, and effective for learners of all ages. Join us and explore a world of knowledge tailored to your interests and needs.
                </p>
                <div>
                    <div className="flex justify-around items-center gap-5">
                        <div className="bg-yellow-200 p-3 rounded-full "><FaRegHeart className="text-yellow-500 text-3xl" /></div>
                        <div>
                            <h1 className="text-xl font-semibold mb-3 text-gray-700">Flexible Classes</h1>
                            <p className="w-2/3 mb-4 text-gray-700">

                                Edu Puls offers flexible classes, enabling learners to study at their own pace and schedule, ensuring convenience and adaptability for diverse lifestyles.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center gap-5">
                        <div className="bg-yellow-200 p-3 rounded-full "><FaBook className="text-yellow-500 text-3xl" /></div>
                        <div>
                            <h1 className="text-xl font-semibold mb-3 text-gray-700">Learn From Anywhere</h1>
                            <p className="w-2/3 mb-4 text-gray-700 ">
                                With Edu Puls, learning knows no boundaries. Our platform enables you to access educational resources from anywhere, empowering you to pursue knowledge conveniently and seamlessly, whether {"you're"} at home, on the go, or anywhere else in the world.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" w-2/5 relative lg:-mt-96 md:-mt-20 -mt-24 mb-96 ml-20 ">
                <div className="flex ">
                    <div className="absolute -left-20 ">
                        <img className="" src={phone2} alt="" />
                    </div>
                    <div className="absolute -right-10 top-5">
                        <img className="" src={phone1} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;