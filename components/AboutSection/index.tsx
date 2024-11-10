

const AboutSection = () => {
    return (
        <div className="w-full min-h-screen bg-image">
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:py-10 py-0 px-10'>
                <div className='h-[500px] flex items-center'>
                    <h2 className='text-[90px] font-bold tracking-tight text-[#9900ff]'>
                        About
                    </h2>
                </div>
                <div className="w-[600px] h-[370px] flex items-center justify-center flex-col bg-image-rectangle rounded-[44px] gap-16">
                    <p className="flex flex-wrap lg:max-w-lg max-w-xs font-bold lg:text-[14px] text-[10px] text-center text-[#000]/80">Hi There, my Name is Hasnain & I  am a Full-Stack developer my expertise in html/css, javascript, typescript, tailwind css, react.js, react-hook-form, axios, next.js, restFull APIs, and also a Sleek Modern UI & UX frontend developer let me know your idea I convert it to reality!</p>
                    <button className="px-5 py-3 flex text-[#fff] bg-[#9900FF] rounded-2xl font-extrabold text-[20px]">Read More</button>
                </div>
            </div>
            {/* <div className="absolute left-0 -bottom-7">
                <Image src={"/Group 7.svg"} alt="group 7 svg" width={230} height={290} />
            </div> */}
        </div>
    )
}

export default AboutSection
