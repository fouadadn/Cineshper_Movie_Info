import G from '../assets/flat-color-icons_google.png'
import { Facebook, Mail, LockKeyhole, Twitter, Instagram } from 'lucide-react';
import { useRef, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate, NavLink } from 'react-router-dom';


function Login() {
    const naviate = useNavigate()
    const { logIn } = useAuth()
    const { LoginWithGoogle } = useAuth()
    const { LoginWithFacebook } = useAuth()
    const { signOut } = useAuth()
    const { isLoggenIN } = useAuth()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setloading] = useState(false)
    const UserNameRef = useRef()
    const emailRef = useRef()
    const passwirdRef = useRef()
    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            if (emailRef.current.value && passwirdRef.current.value) {
                setError('')
                setloading(true)
                await logIn(emailRef.current.value, passwirdRef.current.value)
                naviate('/loggendIn')
            } else {
                setError()
            }
        } catch {
            setError('failed to Log In')
            // setisLoggenIN(false)

        }
        setloading(false)
    }

    return (
        <form className='t9iil' onSubmit={handleSumit}>
            <p className='text-white text-sm font-light text-center'>Log in to watch your favourite shows</p>
            <div className='flex gap-2 justify-around mt-6'>
                <button id='signIn-google' className='backdrop-blur-sm px-12 py-4 w-full flex justify-center mb-2 rounded-xl border border-[#ffffff30]' onClick={LoginWithGoogle}>
                    <img src={G} alt="" className='w-5 ' />
                </button>

            </div>
            <div className='text-white text-center pb-3'>
                <span>Or</span>
            </div>
            {error ? <div class="mt-2 bg-[#ff484881] text-sm text-white rounded-lg p-2 text-center border-[2px] border-red-900 mb-2" >
                <span id="hs-solid-color-danger-label" class="font-bold">{error}</span>
            </div> : ''}
            <div action="">
                <div className='space-y-4'>
                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type="email" placeholder='Email Address' ref={emailRef} />
                        <Mail color='white' size={16} />
                    </div>

                    <div className='flex items-center border bg-[#7300FF10] w-80 justify-between  border-[#a473ff] px-6 py-3 rounded-xl'>
                        <input className='bg-transparent outline-none text-white text-sm' type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' ref={passwirdRef} />
                        <LockKeyhole color='white' size={16} />
                    </div>
                </div>
                <div className='text-white flex justify-between gap-3 items-center mt-2 '>
                    <div>
                        <input type="checkbox" name="" className='rounded-full' checked={showPassword} id="" onChange={() => setShowPassword(!showPassword)} />
                        <label htmlFor="">show Password</label>
                    </div>
                    <div>
                        <NavLink className='text-[12px] text-violet-500  underline ' to={'/ForgetPassword'}>Forget you Password ?</NavLink>
                    </div>
                </div>
                <div>
                    <button className='bg-[#7300FF] text-white w-full text-sm rounded-lg py-3 mt-4 ' disabled={loading}>LOGIN</button>
                </div>
            </div>
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
        </form>
    )
}

export default Login