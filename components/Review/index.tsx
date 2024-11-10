// Import necessary modules
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// Main component function
export default function ReviewSection() {
    return (
        <section className="bg-gray-100 py-12 px-4 bg-image">
            <h2 className="text-[70px] font-extrabold text-[#9900ff] text-center mb-8">Review</h2>
            <div className="flex justify-center items-center gap-4">

                {/* Left Arrow */}
                <button className="text-[#9900ff] text-3xl lg:flex hidden">
                    <AiOutlineArrowLeft />
                </button>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Review Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg relative w-full md:w-80">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-[#9900ff] rounded-full mr-4"></div>
                            <div>
                                <h4 className="text-lg font-semibold">Client Name</h4>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            "Hasnain is a great developer I've ever saw. He made my project from scratch and completed it well. Moreover, they built my database and smooth UI/UX with animation."
                        </p>
                        <p className="text-gray-500 text-sm mb-2">Best Regard,</p>
                        <p className="text-gray-700 font-medium">Client Name</p>
                        <p className="text-[#9900ff] text-sm mt-4">Rating: <span className="font-bold">5.0</span></p>
                    </div>

                    {/* Second Review Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg relative w-full md:w-80">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-[#9900ff] rounded-full mr-4"></div>
                            <div>
                                <h4 className="text-lg font-semibold">Client Name</h4>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            "Hasnain is a great developer I've ever saw. He made my project from scratch and completed it well. Moreover, they built my database and smooth UI/UX with animation."
                        </p>
                        <p className="text-gray-500 text-sm mb-2">Best Regard,</p>
                        <p className="text-gray-700 font-medium">Client Name</p>
                        <p className="text-[#9900ff] text-sm mt-4">Rating: <span className="font-bold">5.0</span></p>
                    </div>
                </div>

                {/* Right Arrow */}
                <button className="text-[#9900ff] text-3xl lg:flex hidden">
                    <AiOutlineArrowRight />
                </button>
            </div>
        </section>
    );
}