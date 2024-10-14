import Footer from '../../../components/footer/footer';
import { Mail } from 'lucide-react';
import { useRef, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function Account() {

    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [mssg, setMssg] = useState('')
    const [loading, setloading] = useState(false)
    const emailRef = useRef()
    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            setError('')
            setloading(true)
            await resetPassword(emailRef.current.value)
            setMssg('Check your Inbox')
        } catch {
            setError('failed')
            setMssg('')

            // setisLoggenIN(false)

        }
        setloading(false)
    }
    return (
        <>
            <div className='loginBg  xl:h-[100vh]  flex justify-around gap-24 xl:gap-0 py-20 flex-wrap items-center duration-500'>
                <div className='text-white space-y-6'>
                    <h1 className=' text-6xl text-center'><span className='text-[#7300FF] font-extrabold'>C</span>ine Sphere</h1>
                    <h2 className='text-6xl md:text-7xl font-extrabold text-center'>The world’s Largest <br /> Movie Library </h2>
                </div>
                <form onSubmit={handleSumit} className='py-12 px-4 md:px-20 shadow-sm shadow-white bg-[#ffffff10] backdrop-blur-md border-[1px] rounded-[30px] space-y-3  border-[#ffffff20]'>
                    <div className='duration-700 mb-5'>
                        <h1 className='text-white text-2xl font-bold text-center'>Enter Your Email</h1>
                        {mssg ? <div class="mt-2 bg-teal-500 text-sm text-white rounded-lg p-2 text-center" >
                            <span id="hs-solid-color-success-label" class="font-bold">{mssg}</span>
                        </div> : error ? <div class="mt-2 bg-[#ff484881] text-sm text-white rounded-lg p-2 text-center border-[2px] border-red-900 mb-2" >
                            <span id="hs-solid-color-danger-label" class="font-bold">{error}</span>
                        </div>: ''}
                    </div>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="email" placeholder='Email Address' ref={emailRef} />
                        <Mail color='white' size={16} />
                    </div>

                    <button type='submit' className='bg-[#7300FF] text-white w-full text-sm rounded-lg py-3 mt-1 ' disabled={loading}>Send</button>


                </form>

            </div>
            <div className='mt-10'>
                <Footer displayImg='hidden' />
            </div>
        </>
    )
}