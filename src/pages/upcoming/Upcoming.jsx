import { useEffect, useState } from 'react'
import MoviesPosters from '../assets/Login.jpg'
import Footer from '../../components/footer/footer';
export default function Upcoming() {

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const date = new Date()
    const currentMonthNumber = date.getMonth() + 1
    const NextMonthNumber = date.getMonth() + 2
    const currentYear = String(date.getFullYear())

    const [upcoming, setUpcoming] = useState([])
    const [media_type, setMedia_type] = useState('movie')
    const [pageNumber, setpageNumber] = useState(1)
    const [moviecount, setMovieCount] = useState(0)
    let currentMonthName;
    let NextMonthName;

    months.map((v, i) => i + 1 == currentMonthNumber ? currentMonthName = v : '')
    months.map((v, i) => i + 1 == NextMonthNumber ? NextMonthName = v : '')

    console.log(pageNumber)

    useEffect(() => {

        async function fetchUpcomingMovies() {
            await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=${pageNumber}`)
                .then(response => response.json())
                .then(response => {
                    if (pageNumber === 1) {
                        setUpcoming(response.results)
                    }
                    response.results.map(v => upcoming.push(v))
                })
            // .then(response => console.log(response.results) )

        }

        fetchUpcomingMovies()
    }, [pageNumber])

    function handleSelectChanges(e) {
        setMedia_type(e.target.value)
    }

    console.log(upcoming)


    return (
        <div className='flex flex-col'>
            <div className='relative'>
                <div className="absolute h-[110vh] w-full bg-gradient-to-t z-30 from-[#000000]  to-90% to-transparent">
                </div>
                <img src={MoviesPosters} alt="" className=" " />

                <div className='text-white z-50 bottom-5 absolute md:bottom-24  w-full items-center flex justify-between px-4 lg:px-10'>
                    <div>
                        <h1 className=' text-lg lg:text-4xl font-bold'>Get Ready for Action: Upcoming <br /> Blockbusters You Can't Miss!</h1>
                        <p className='hidden lg:block'>Prepare for an adrenaline-packed season with our upcoming blockbusters! <br /> From thrilling action
                            sequences to heart-pounding adventures, these movies <br /> will keep you on the edge of your seat.
                            Mark your calendars for an unforgettable <br /> cinematic experience!
                        </p>
                    </div>

                    <div>
                        <select onChange={handleSelectChanges} name="" id="" className='outline-none rounded-tr-xl bg-[#7300FF20] border border-white  rounded-bl-xl py-2 px-3'>
                            <option value="movie" className='bg-black '>Movies</option>
                            <option value="tv" className='bg-black '>Tv Shows</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className='z-50 mt-3 text-white px-4 lg:px-10'>
                <h1 className='text-3xl font-bold'>UpComing Movies</h1>
                <div className='mt-10'>
                    <span className='text-2xl font-semibold '>{currentMonthName}</span>
                </div>
                <hr className="border-[#a473ff90] " />
                <div className='flex justify-center'>
                    <div className='flex flex-wrap gap-10 justify-center h-[600px] w-[800px]  overflow-auto bg-[#7300FF30] rounded-3xl my-3 [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF30]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF] '>
                        {
                            upcoming?.map((v, i) => v.release_date.split('-')[1] === String(currentMonthNumber) && v.release_date.split('-')[0] === currentYear ?
                                <div key={i} className='flex gap-6  my-5 w-[330px] '>
                                    <div className='mt-6'>
                                        <span className='text-3xl font-bold border-[#7300FF] border-2 p-6 rounded-full text-[#7300FF] bg-[#7300FF40] '>{v.release_date.split('-')[2]}</span>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <img src={v.poster_path ? `https://image.tmdb.org/t/p/w200/${v.poster_path}` : 'https://static.displate.com/324x454/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.avif'} alt="" className="w-52 rounded-2xl" />
                                        <div>
                                            <h2 className=' md:text-xl font-bold text-center'> {v.title}</h2>
                                        </div>
                                    </div>
                                    {/* {setMovieCount(moviecount+1)} */}
                                </div> : '')
                        }
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className='text-white bg-[#7300FF] text-xl px-5 py-2 rounded-lg' onClick={() => setpageNumber(pageNumber + 1)}>load More</button>
                </div>
            </div>

            <div className='z-50 mt-3 text-white px-4 lg:px-10'>
                <div className='mt-10'>
                    <span className='text-2xl font-semibold '>{NextMonthName}</span>
                </div>
                <hr className="border-[#a473ff90] " />
                <div className='flex justify-center'>
                    <div className='flex flex-wrap gap-10 justify-center h-[600px] w-[800px]  overflow-auto bg-[#7300FF30] rounded-3xl my-3 [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF30]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF] '>
                        {
                            upcoming.map((v, i) => v.release_date.split('-')[1] === String(NextMonthNumber) && v.release_date.split('-')[0] === currentYear ?
                                <div key={i} className='flex gap-6  my-5 w-[330px]'>
                                    <div className='mt-6'>
                                        <span className='text-3xl font-bold border-[#7300FF] border-2 p-6 rounded-full text-[#7300FF] bg-[#7300FF40] '>{v.release_date.split('-')[2]}</span>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <img src={v.poster_path ? `https://image.tmdb.org/t/p/w200/${v.poster_path}` : '/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.avif'} alt="" className="w-52 rounded-2xl" />
                                        <div>
                                            <h2 className=' md:text-xl font-bold text-center'> {v.title}</h2>
                                        </div>
                                    </div>
                                </div> : '')
                        }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='text-white bg-[#7300FF] text-xl px-5 py-2 rounded-lg' onClick={() => setpageNumber(pageNumber + 1)}>load More</button>
                </div>
            </div>
            <div className='mt-10'>
                <Footer />
            </div>

        </div>
    )
}