import { Star } from 'lucide-react';
import MovieInfo from "./MovieInfo";
import { NavLink } from "react-router-dom";




export default function Movies({ title, moviesorshows, genre, media_type }) {

    

    return (
        <div className="text-white space-y-10 px-4  lg:px-10 z-50 hhh pt-10 ">
            <h1 className="text-2xl font-bold ">{title}</h1>

            <div className="flex overflow-auto gap-4 lg:gap-8 py-4  [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF]">
                {moviesorshows?.map((v, i) =>
                        <NavLink key={i} to={`/${v.id}?type=${media_type}`} >
                            <div  className="flex-shrink-0" >

                                <img src={v.backdrop_path ?  `https://image.tmdb.org/t/p/w500/${v.backdrop_path}` : '/backdropNotFound.jpg'} alt="" className="w-64 rounded-2xl" />
                                <div >
                                    <h1 className="mt-2 font-bold w-64">{v.title} {v.name}</h1>
                                    <div className="flex mb-10  items-center gap-1">
                                        <Star size={13} color='yellow' fill='yellow' />
                                        <div className="text-[#7300FF]  items-center flex">
                                            <span className="text-[#c0a6ff] font-bold">{String(v.vote_average).slice(0, 3)}</span>
                                            <hr className="w-4 text-[#a473ff] rotate-90" />
                                            <div>
                                                <MovieInfo
                                                    genreStyle={'text-[#a473ff] text-sm'}
                                                    descDisplay={'hidden'}
                                                    divDisplay={'hidden'}
                                                    yearDisplay={'hidden'}
                                                    Genre={[genre.map((va) => va.id === v.genre_ids[0] ? va.name : ''), genre.map((va) => va.id === v.genre_ids[1] ? va.name : '')]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    
                )}
            </div>
        </div>
    )
}