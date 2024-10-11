import { Facebook, Mail, LockKeyhole, Twitter, Instagram, UserRound } from 'lucide-react';

function SignUp() {
    return (
        <div className='t9iil'>
            <p className='text-white text-sm font-light text-center'>Register Now to watch your favourite <br /> shows</p>
            <div className='text-white text-center my-3'>
                <span>Or</span>
            </div>
            <form action="">
                <div className='space-y-4'>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="text" placeholder='User Name' />
                        <UserRound color='white' size={16} />
                    </div>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="email" placeholder='Email Address' />
                        <Mail color='white' size={16} />
                    </div>

                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="password" placeholder='Password' />
                        <LockKeyhole color='white' size={16} />
                    </div>

                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="password" placeholder='Confirm Password' />
                        <LockKeyhole color='white' size={16} />
                    </div>

                </div>
                <div className='text-white flex gap-3 mt-2'>
                    <input type="radio" name="" className='text-white ' id="" />
                    <label htmlFor="" className='text-[12px]'>I agree to the <span className='font-bold'>privacy policy</span> & <span className='font-bold'>Terms and conditions</span> </label>
                </div>
                <div>
                    <button className='bg-[#7300FF] text-white w-full text-sm rounded-lg py-3 mt-4 '>Sign Up</button>
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

export default SignUp