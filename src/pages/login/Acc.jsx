import Login from './ui/login'
import SignUp from './ui/SignUp'
import Footer from '../../components/footer/footer';

import { useState } from 'react';

export default function Account() {

    const [checkSign, setCheckSign] = useState(0)

    let bold;
    let bold2;
    let purple;
    let purple2;


    function handleChangeSign(v, i) {
        setCheckSign(v)
    }

    if (checkSign == 0) {
        bold = 'font-bold'
        purple = 'text-[#a473ff]'


    } else {
        bold2 = 'font-bold'
        purple2 = 'text-[#a473ff]'

    }
    return (
        <>
            <div className='loginBg  xl:h-[100vh]  flex justify-around gap-24 xl:gap-0 py-20 flex-wrap items-center duration-500'>
                <div className='text-white space-y-6'>
                    <h1 className=' text-6xl text-center'><span className='text-[#7300FF] font-extrabold'>C</span>ine Sphere</h1>
                    <h2 className='text-6xl md:text-7xl font-extrabold text-center'>The world’s Largest <br /> Movie Library </h2>
                </div>
                <div className='py-12 px-4 md:px-20 shadow-sm shadow-white bg-[#ffffff10] backdrop-blur-md border-[1px] rounded-[30px] space-y-3  border-[#ffffff20]'>
                    <div className='text-white space-y-4'>
                        <div className='flex items-center justify-center gap-3 ' >
                            <button className={`${bold} } ${purple2} text-2xl duration-500 `} onClick={() => handleChangeSign(0)}>login</button>
                            <button className={` ${purple} ${bold2}  text-2xl duration-500 `} onClick={() => handleChangeSign(1)}>Sign Up</button>
                        </div>
                    </div>
                    <div className='duration-700'>
                        {
                            checkSign === 0 ? <Login className='duration-700' /> : <SignUp className='duration-700' />
                        }
                    </div>

                </div>

            </div>
            <div className='mt-10'>
                <Footer displayImg='hidden' />
            </div>
        </>
    )
}