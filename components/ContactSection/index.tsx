// Main component function
export default function Contact() {
    return (
        <section className="min-h-screen bg-gray-100 flex flex-col justify-between items-center py-8 px-4 bg-image">
            <div className="w-full max-w-6xl mx-auto flex flex-col h-[600px] lg:flex-row items-center justify-between">

                {/* Contact Form */}
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-lg mb-8 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-center text-[#9900ff] mb-6">Fill Out Form</h3>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#9900ff]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#9900ff]"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#9900ff] text-white rounded-lg hover:bg-purple-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="text-center lg:text-left max-w-md">
                    <h2 className="text-4xl font-bold text-[#9900ff]">Contact</h2>
                    <p className="mt-4 text-gray-700 font-bold tracking-tight text-lg">
                        Let’s connect with us. Drop your website idea, and we’ll convert it into reality.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full text-center py-4 bg-black text-white mt-8">
                <p>build with love ❤️ by Muhammad Hasnain</p>
            </footer>
        </section>
    );
}
