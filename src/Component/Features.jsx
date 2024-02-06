import { FiBookOpen, FiUser, FiDollarSign, FiMonitor, FiTrendingUp, FiMessageCircle } from 'react-icons/fi';
import imagePlaceholder from '../../public/image/feature.png';

const Features = () => {
    const features = [
        { title: 'Course Catalog', description: 'Display a catalog of digital courses with titles, descriptions, instructors, duration, and pricing.', icon: <FiBookOpen size={48} /> },
        { title: 'User Registration and Profiles', description: 'Allow users to create accounts/profiles to enroll in courses, track progress, and manage subscriptions.', icon: <FiUser size={48} /> },
        { title: 'Course Enrollment and Payment', description: 'Enable seamless course enrollment and payment processing with various options such as one-time purchases, subscriptions, or installment plans.', icon: <FiDollarSign size={48} /> },
        { title: 'Interactive Learning Materials', description: 'Incorporate multimedia elements like videos, presentations, quizzes, and assignments to enhance the learning experience.', icon: <FiMonitor size={48} /> },
        { title: 'Progress Tracking and Reporting', description: 'Implement tools for users to monitor progress, track completion status, and generate progress reports.', icon: <FiTrendingUp size={48} />, color: 'bg-yellow-100' },
        { title: 'Discussion Forums and Community Engagement', description: 'Foster a sense of community with discussion forums where students can interact, ask questions, and collaborate.', icon: <FiMessageCircle size={48} /> }
    ];

    return (
        <div id='features' className="px-8 py-12 bg-gray-100">
            <h1 className="text-4xl text-center mb-8 font-semibold text-gray-700">Our Key <span className='text-yellow-400'>Features</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                <div className="md:col-span-2 flex justify-center mb-8">
                    <img src={imagePlaceholder} alt="Features" className="w-full  md:max-w-lg rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out" />
                </div>
                {features.map((feature, index) => (
                    <div key={index} className={` bg-yellow-100 hover:bg-gradient-to-b from-transparent to-yellow-300 shadow-md p-6 rounded-md flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg`}>
                        <div className="mr-4">{feature.icon}</div>
                        <div>
                            <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
