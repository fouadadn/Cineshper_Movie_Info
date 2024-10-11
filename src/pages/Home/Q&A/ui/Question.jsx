import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Question() {
    const [checkDisplayIndex, setCheckDisplayIndex] = useState(null);

    function handleCheck(i) {
        // If the same index is clicked, collapse it, otherwise open the new one
        setCheckDisplayIndex(prevIndex => prevIndex === i ? null : i);
    }

    return (
        <div className='flex flex-wrap justify-center gap-5 items-center px-4'>

            <div
                className='px-10 py-5  bg-[#30007730] w-[550px] cursor-pointer rounded-xl '
                onClick={() => handleCheck(0)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>What is Cine Sphere?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28] ${checkDisplayIndex === 0 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Iste at, ratione ipsam rem fuga rerum quaerat magni dolorem nulla ad non dolore cum, tenetur praesentium hic doloribus repellendus. Soluta, deserunt!
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-2 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(1)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>What subscription plans does Cine Sphere offer?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28] ${checkDisplayIndex === 1 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, reiciendis!
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-2 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(2)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>Can I download movies and shows to watch offline?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28] ${checkDisplayIndex === 2 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quos.
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-5 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(3)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>How do I cancel my subscription?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28]  ${checkDisplayIndex === 3 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit!
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-5 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(5)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>Can I share my account with others?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28]  ${checkDisplayIndex === 5 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 5 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptatibus?
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-2 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(6)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>How do I report an issue with the platform?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28]  ${checkDisplayIndex === 6 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 6 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, similique?
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-5 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(7)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>What if I forget my password?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28]  ${checkDisplayIndex === 7 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 7 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        ydk fih xkon kaynssa password
                    </p>
                </div>
            </div>

            <div
                className='px-10 py-2 bg-[#30007730] rounded-xl  w-[550px] cursor-pointer'
                onClick={() => handleCheck(8)}
            >
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl '>How do I create a Fan Art Creator Profile?</p>
                    </div>
                    <span
                        className={`transform transition-transform duration-500  rounded-full p-2 bg-[#1A0B28]  ${checkDisplayIndex === 8 ? 'rotate-180' : ''
                            }`}
                    >
                        <ChevronDown color='white' />
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${checkDisplayIndex === 8 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='text-white mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, similique?
                    </p>
                </div>
            </div>
        </div>
    );
}
