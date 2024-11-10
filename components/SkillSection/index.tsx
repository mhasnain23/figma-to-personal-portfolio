import { languageImages, moreImages } from '@/utils'
import Image from 'next/image'
import React from 'react'

const SkillSection = () => {
    return (
        <div className='w-full min-h-screen relative bg-image'>
            <div className='max-w-7xl mx-auto h-[500px] flex flex-col items-center gap-28'>
                <div>
                    <h2 className=' text-[76px] font-extrabold tracking-tight text-center text-[#9900ff]'>
                        Skills
                    </h2>
                </div>
                <div className='flex items-center justify-evenly gap-10'>
                    {
                        languageImages.map((item, index) => (
                            <div key={index} className='flex items-center gap-4'>
                                <Image src={item.url} width={60} height={60} alt={item.name
                                } className='object-cover rounded-full' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default SkillSection
