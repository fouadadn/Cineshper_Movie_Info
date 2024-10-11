import G from '../assets/flat-color-icons_google.png'
import { Facebook, Mail, LockKeyhole, Twitter, Instagram } from 'lucide-react';

function Login() {
    return (
        <div className='t9iil'>
            <p className='text-white text-sm font-light text-center'>Log in to watch your favourite shows</p>
            <div className='flex gap-2 justify-around mt-6'>
                <button className='backdrop-blur-sm px-12 py-4 rounded-xl border border-[#ffffff30]'>
                    <img src={G} alt="" className='w-5 ' />
                </button>
                <button className='backdrop-blur-sm px-12 py-4 rounded-xl border border-[#ffffff30]'>
                    <Facebook size={20} color='white' />
                </button>
            </div>
            <div className='text-white text-center pb-3'>
                <span>Or</span>
            </div>
            <form action="">
                <div className='space-y-4'>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="email" placeholder='Email Address' />
                        <Mail color='white' size={16} />
                    </div>

                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="password" placeholder='Password' />
                        <LockKeyhole color='white' size={16} />
                    </div>
                </div>
                <div className='text-white flex gap-3 mt-2 '>
                    <input type="radio" name="" className='w-4' id="" />
                    <label htmlFor="">Remember Me</label>
                </div>
                <div>
                    <button className='bg-[#7300FF] text-white w-full text-sm rounded-lg py-3 mt-4 '>LOGIN</button>
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

export default Login