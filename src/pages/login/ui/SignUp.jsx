import { Facebook, Mail, LockKeyhole, Twitter, Instagram, UserRound } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggendIn from '../../logeedin';
import { signOut } from 'firebase/auth';

function SignUpp() {
    const naviate = useNavigate()
    const { signup } = useAuth()
    const { signOut } = useAuth()
    const { isLoggenIN} = useAuth()
    const [error , setError] = useState('')
    const [loading , setloading] = useState(false)
    const UserNameRef = useRef()
    const emailRef = useRef()
    const passwirdRef = useRef()
    const passwirdConfirmationRef = useRef()
    const handleSumit = async (e)=>{
        e.preventDefault();
        if(passwirdRef.current.value !== passwirdConfirmationRef.current.value){
            return setError('Password do not math')
        }
        try{
            setError('')
            setloading(true)
            await signup(emailRef.current.value , passwirdRef.current.value)
            if(LoggendIn){
                naviate('/loggendIn')
            }
        
            
        }catch{
            setError('failed to Create an account')
            // setisLoggenIN(false)

        }
        setloading(false)
    }
    return (
        <div className='t9iil'>
            {
                error ? <div class="mt-2 bg-[#ff484881] text-sm text-white rounded-lg p-2 text-center border-[2px] border-red-900 mb-2" >
                <span id="hs-solid-color-danger-label" class="font-bold">{error}</span>
            </div> : <p className='text-white text-sm font-light text-center'>Register Now to watch your favourite <br /> shows</p>
            }
            
            <div className='text-white text-center my-3'>
                <span>Or</span>
            </div>
            <form action="" onSubmit={handleSumit}>
                <div className='space-y-4'>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="text" placeholder='User Name' ref={UserNameRef} />
                        <UserRound color='white' size={16} />
                    </div>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="email" placeholder='Email Address' ref={emailRef} />
                        <Mail color='white' size={16} />
                    </div>

                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="password" placeholder='Password' ref={passwirdRef} />
                        <LockKeyhole color='white' size={16} />
                    </div>

                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="password" placeholder='Confirm Password' ref={passwirdConfirmationRef} />
                        <LockKeyhole color='white' size={16} />
                    </div>

                </div>
                <div className='text-white flex gap-3 mt-2'>
                    <input type="radio" name="" className='text-white ' id="" />
                    <label htmlFor="" className='text-[12px]'>I agree to the <span className='font-bold'>privacy policy</span> & <span className='font-bold'>Terms and conditions</span> </label>
                </div>
                <div>
                    <button className='bg-[#7300FF] text-white w-full text-sm rounded-lg py-3 mt-4 ' disabled={loading}>Sign Up</button>
                </div>
            </form>
            <div className='flex justify-center gap-2 mt-3'>
                <button className='bg-white rounded-full p-1'>
                    <Facebook size={15} />
                </button>
                <button className='bg-white rounded-full p-1'>
                    <Twitter size={15} />
                </button>
                <button className='bg-white rounded-full p-1'>
                    <Instagram size={15} />
                </button>
            </div>
        </div>
    )
}

export default SignUpp