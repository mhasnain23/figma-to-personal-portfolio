// Import necessary modules
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Icon for the arrow

// Main component function
export default function WorkSection() {
    return (
        <section className="bg-gray-100 py-12 px-4 bg-image" id='WorkSection'>
            <h2 className="text-[70px] font-extrabold text-[#9900ff] text-center mb-8">Work</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">

                {/* Full Stack Card */}
                <div className="bg-black text-white rounded-xl p-6 w-full md:w-1/3 shadow-lg relative">
                    <div className="relative h-56 rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/path/to/fullstack-image.jpg" // Replace with the actual image path
                            alt="Full Stack Project"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold">Full Stack</h3>
                    <p className="text-sm mt-2">functionality | database</p>
                    <button className="absolute bottom-4 right-4 text-[white] bg-[#9900ff] text-4xl rounded-full">
                        <AiOutlineArrowRight />
                    </button>
                </div>

                {/* Frontend Card */}
                <div className="bg-black text-white rounded-xl p-6 w-full md:w-1/3 shadow-lg relative">
                    <div className="relative h-56 rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/path/to/frontend-image.jpg" // Replace with the actual image path
                            alt="Frontend Project"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold">Frontend</h3>
                    <p className="text-sm mt-2">portfolio | design | animation</p>
                    <button className="absolute bottom-4 right-4 text-[white] bg-[#9900ff] text-4xl rounded-full">
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}