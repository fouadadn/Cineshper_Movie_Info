
import footerImage from '../assets/footer.png'


export default function Footer({ displayImg }) {
    return (
        <div className='text-white'>
            <div className={`${displayImg}`}>
                <img src={footerImage} alt="" className='' />
                <div className="mb-10 relative bottom-16 lg:bottom-52">
                    <div className="flex justify-center relative  ">
                        <div className="space-y-6">
                            <h1 className=" text-lg lg:text-3xl font-bold text-center ">Join Now with your Email Address and Choose your plan to get Started.</h1>
                            <div className="flex justify-center gap-5">
                                <input className='outline-none text-white text-sm bg-[#7300FF10] border-[#a473ff] border-[1px] px-6 py-3 rounded-xl w-72 lg:w-96' type="email" placeholder='Email Address' />
                                <button className="bg-[#7300FF] rounded-tr-2xl rounded-bl-2xl px-3 md:py-1 md:px-9">join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className=" mb-6 flex flex-col items-center ">
                <div>

                    <h1 className='text-4xl relative bottom-3'>
                        <span className='font- text-[#7300FF] text-6xl'>C</span>ine sphere
                    </h1>
                </div>
                <p className="text-lg lg:text-xl text-center px-3">CineSphere is your go-to platform for a world of entertainment, offering a vast library of films, TV shows, and exclusive content.  </p>

                <div className="text-black w-full mt-10">
                    <hr className="border-[#a473ff90] " />
                </div>

                <div className="flex justify-center mt-6">
                    <div className='text-center'>
                        ⓒ Cinesphere Movies & Tv Shows , <br /> Made by <a href="https://www.instagram.com/fouad_sksk/profilecard/?igsh=dGViNDU4NnY2cG9t" className="text-[#7300FF]" >Fouad Adnan</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}