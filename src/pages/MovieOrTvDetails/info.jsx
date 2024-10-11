import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Dot, Bookmark, Play, Star, TriangleAlert, X } from 'lucide-react';
import YouTube from "react-youtube";
import Footer from "../../components/footer/footer";
import profil from '../assets/profil.jpg'


export default function Info() {

    // window.scrollTo(0, 0)

    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [videos, setVideos] = useState([])
    const [similar, setSimilar] = useState([])
    const [Genre, setGenre] = useState([])
    const [review, setReviws] = useState([])
    const [seasons, setSeasons] = useState([])
    const [selectSeason, setSelectSeason] = useState(1)
    const [selectEpisodes, setSelectEpisodes] = useState(1)
    const [urlMediaType] = useSearchParams()
    const params = useParams();
    const media_type = urlMediaType.getAll('type')
    const navigate = useNavigate()
    const [displayModaltrailler, setdisplayModaltrailler] = useState(false)

    useEffect(() => {
        async function fetchdMoviedetails() {


            await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=091d4817f9045622142ffd67a08b2d15`)
                .then(response => response.json())
                .then(response => setMovie(response))
        }

        async function fetchdTvdetails() {


            await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=091d4817f9045622142ffd67a08b2d15`)
                .then(response => response.json())
                .then(response => setMovie(response));


        }

        async function fetchdTvdCast() {


            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/credits?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setCast(response.cast))
        }

        async function fetchdMovieCast() {


            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/credits?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setCast(response.cast))
        }

        async function fetchdMovieVideo() {
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setVideos(response.results))
        }

        async function fetchdTvVideo() {
            await fetch(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setVideos(response.results))
        }

        async function fetchSimilarMovies() {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/recommendations?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setSimilar(response.results))
        }

        async function fetchSimilarTvs() {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/recommendations?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setSimilar(response.results))
        }

        async function fetchGenreMovies() {
            await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setGenre(response.genres))
        }

        async function fetchGenreTvs() {
            await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setGenre(response.genres))
        }

        async function fetchMovieReview() {
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setReviws(response.results))
        }

        async function fetchTvReview() {
            await fetch(`https://api.themoviedb.org/3/tv/${params.id}/reviews?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setReviws(response.results))
        }

        media_type == 'movie' ? fetchdMoviedetails() : fetchdTvdetails()
        media_type == 'movie' ? fetchdMovieCast() : fetchdTvdCast()
        media_type == 'movie' ? fetchdMovieVideo() : fetchdTvVideo()
        media_type == 'movie' ? fetchSimilarMovies() : fetchSimilarTvs()
        media_type == 'movie' ? fetchGenreMovies() : fetchGenreTvs()
        media_type == 'movie' ? fetchMovieReview() : fetchTvReview()


    }, [])

    function handleSelectSeasons(e) {
        setSelectSeason(e.target.value)
    }

    function handleSelectEpisodes(e) {
        setSelectEpisodes(e.target.value)
    }
    const handlechangeDisplayTrailer = () => {
        setdisplayModaltrailler(!displayModaltrailler)
    }

    const year = String(movie.release_date).slice(0, 4)
    const yearTv = String(movie.first_air_date).slice(0, 4)
    let Trailer;
    videos.map(v => v.type === "Trailer" ? Trailer = v : '')

    useEffect(() => {
        setSeasons(movie.seasons)
    }, [movie])


    return (
        <div className="text-white flex flex-col">

            {/* backdrop image at the top */}
            <div className="relative ">
                <div className="absolute h-full w-full bg-gradient-to-t z-30 from-[#000000]  to-100% to-transparent">
                </div>
                <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : '/backdropNotFound.jpg'} alt="" className="t9iil" />

                <div className="absolute  bottom-0 md:bottom-32 px-4 lg:px-10 z-50 flex items-end gap-3 " >
                    <div className="">
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/posternotFound.jpg'} alt="" className={`rounded-xl shadow-lg w-36 sm:w-52 shadow-[#7300FF60] t9iil`} />
                    </div>
                    <div className="mb-2">
                        <p>{media_type == 'movie' ? year : yearTv}</p>
                        <h1 className=" text-3xl lg:text-5xl font-semibold mb-0 md:mb-3">{media_type == 'movie' ? movie.title : movie.name}</h1>
                        <div className="flex items-center gap-2 font-semibold text-lg mb-2">
                            {
                                media_type == 'tv' ? <p className="text-sm md:text-lg text-nowrap  bg-[#7300FF50]  rounded-lg px-1">{movie.number_of_seasons}<span className="opacity-0">.</span>Seasons</p> : ''
                            }
                            <div className=" h-6 overflow-hidden">
                                {
                                    movie.genres ?
                                        movie.genres.map((v, i) =>
                                            <span key={i} className="text-sm md:text-lg ">
                                                <span className="text-nowrap">{v.name} </span>
                                                {movie?.genres?.length - 1 !== i ? <span><Dot className="inline-block -mx-1" /></span> : ''}
                                            </span>
                                        )
                                        : ''
                                }
                            </div>
                        </div>
                        <div className="flex gap-6 ">
                            <a href="#trailer" className='flex rounded-tr-xl backdrop-blur-lg  bg-[#ffffff10] rounded-bl-xl py-1 px-2 md:px-4 md:py-2 gap-1' >
                                <Play strokeWidth={3} /><span className='text-nowrap'>Watch<span className="opacity-0">.</span>Trailer</span>
                            </a>
                            <button className=' rounded-tr-xl bg-[#7300FF20] border border-white  rounded-bl-xl py-1 px-2 md:px-4 md:py-2 gap-1 hidden sm:flex'>
                                <Bookmark strokeWidth={3} /><span className='text-nowrap'>Add<span className="opacity-0">.</span>to<span className="opacity-0">.</span>Wishlist</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>


            {/* overview of the show */}
            <div className="6 w-full bg-black z-50 mt-5 md:mt-0 px-4 lg:px-10">
                <h1 className="text-white text-4xl font-semibold my-3">Synopsis</h1>
                <p className="ztext-xl">{movie.overview}</p>
            </div>

            {/* cast */}
            <div className="px-4 lg:px-10 my-24 z-50">
                {/* cast display */}
                <h1 className="text-4xl font-bold my-3">Cast</h1>
                <div className="flex gap-10 scroll overflow-auto py-4
                    [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF]">
                    {
                        cast && cast.length > 0 ? cast.map((c, i) =>
                            <div key={i} className="flex items-center justify-center gap-2" >
                                <div className="rounded-full overflow-hidden bg-red-200 w-20 h-20">
                                    <img src={c.profile_path ? `https://image.tmdb.org/t/p/w300/${c.profile_path}` : profil} alt="" className={` bottom-3 relative ${c.profile_path ? 'w-20 lg:w-[113px]' : 'top-[0.1px]  '}`} />
                                </div>
                                <div>
                                    <h1 className="text-nowrap text-lg md:text-2xl text-semibold">{String(c.name).split(' ').map(v => <><span className="text-white">{v}</span><span className="opacity-0">.</span></>)}</h1>
                                    <span className="text-nowrap text-sm text-[#7300ffe0] ">{String(c.character).split(' ').map(v => <><span className="text-[#7300FF]">{v}</span><span className="opacity-0">.</span></>)}</span>
                                </div>
                            </div>)
                            : <div className="text-center w-full flex justify-center gap-3 text-[#7300FF] ">
                                <TriangleAlert size={40} />
                                <h1 className="text-4xl font-semibold  text-white">No Cast found</h1>
                            </div>
                    }
                </div>
            </div>

            {/* watch Trailer  */}
            <div className="px-4 lg:px-10">
                <div className="relative overflow-hidden w-[100%] pt-[56.25%] border-[1px] border-[#7300FF] rounded-xl " id="trailer">
                    <iframe className="absolute top-0 bottom-0 right-0 left-0 w-[100%] h-[100%] rounded-2xl " src={`https://www.youtube.com/embed/${Trailer?.key}`}></iframe>
                </div>
            </div>

            {/* similar movies or tv shows */}
            <div className="mt-32 px-4 lg:px-10">
                <h1 className="text-4xl font-semibold py-6">Similar {media_type == 'movie' ? 'Movies' : 'Shows'} for you</h1>

                <div className="flex gap-6 overflow-auto [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF] py-6">
                    {
                        similar && similar.length > 0 ? similar.map((v, i) =>
                            <a href="" key={i} className="flex-shrink-0 " onClick={() => {
                                navigate(`/${v?.id}?type=${v?.media_type}`)
                            }}>
                                <img src={v.backdrop_path ? `https://image.tmdb.org/t/p/original/${v.backdrop_path}` : '/backdropNotFound.jpg'} alt="" className=" w-72 md:w-96 rounded-xl" />
                                <div>
                                    <h1 className="text-xl font-semibold">{media_type == 'movie' ? v.title : v.name}</h1>
                                    <div className="flex items-center gap-2">
                                        <Star color="yellow" fill="yellow" />
                                        <span className="text-[#c0a6ff] font-bold">{String(v.vote_average).slice(0, 4)}</span>
                                        <hr className="w-3 border-[#a473ff] rotate-90" />

                                        <div className=" flex text-[#a473ff]">
                                            {
                                                Genre.map((g, i) =>
                                                    v.genre_ids[0] === g.id ? <span key={i}>{g.name}</span> : ''
                                                )
                                            }
                                            {v.genre_ids[1] ? <Dot /> : ''}
                                            {
                                                Genre.map(g =>
                                                    v.genre_ids[1] === g.id ? <span key={i}>{g.name}</span> : ''
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                            : <div className="text-center w-full flex justify-center gap-3 text-[#7300FF] ">
                                <TriangleAlert size={40} />
                                <h1 className="text-4xl font-semibold  text-white">No Similar {media_type == 'movie' ? 'Movies' : "Tv Shows"} found</h1>
                            </div>
                    }
                </div>
            </div>

            {/* reviews  */}
            <div className="lg:px-10 px-4 py-10">
                <h1 className="text-4xl font-semibold  py-10">Reviews</h1>
                <div className="flex gap-6 overflow-auto [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF30]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF] py-6">
                    {
                        review && review.length > 0 ? review.map((v, i) =>
                            <div key={i} className="bg-[#7300FF40] shadow-md  rounded-3xl w-[350px] md:w-[440px] flex-shrink-0 p-3">
                                <div className="flex items-center gap-3  rounded-3xl px-2 py-1">
                                    <div className="border-2 border-[#7300FF] rounded-full w-20 h-20 overflow-hidden p-1">
                                        <img src={v.author_details.avatar_path ? `https://image.tmdb.org/t/p/w200/${v.author_details.avatar_path}` : profil} alt="" className="w-20 h-18 rounded-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{v.author}</h2>

                                        <span className="flex gap-2"> <Star color="yellow" fill="yellow" /> <span className="text-[#7300FF] font-bold text-xl">{v.author_details.rating}</span> </span>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="h-20 pxj-3 overflow-auto [&::-webkit-scrollbar]:w-1
                                        [&::-webkit-scrollbar-track]:rounded-full
                                        [&::-webkit-scrollbar-track]:bg-gray-100
                                        [&::-webkit-scrollbar-thumb]:rounded-full 
                                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
                                        {v.content}
                                    </p>
                                </div>
                            </div>
                        ) :
                            <div className="text-center w-full flex justify-center gap-3 text-[#7300FF]">
                                <TriangleAlert size={40} />
                                <h1 className="text-4xl font-semibold  text-white">No Reviews found</h1>
                            </div>
                    }
                </div>

            </div>

            <Footer />

        </div>
    )
}