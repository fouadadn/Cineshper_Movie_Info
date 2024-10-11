import React, { useState } from "react";
// Import Swiper React components


import Slider from "react-slick"
import MovieInfo from "./MovieInfo";



export default function HomePageSlider({ movieDetail , genre}) {

    const [movieIndex, setMovieIndex] = useState(0)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // fade : true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'bigSlider',
        afterChange: (i) => setMovieIndex(i),
        responsive: [
            
                
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    fade: true
                    
                }
            }

        ]

    };
    
    const Movies5 = movieDetail.slice(6, 11)
    return (
        <div>
            <div className="relative ">
                <div className="absolute h-[120vh] w-full bg-gradient-to-r z-30 from-[#000000]  to-70% to-transparent">
                </div>
                <div >
                    {
                        Movies5.map((v, i) =>
                            <div key={i} >
                                {movieIndex === i ? <MovieInfo
                                    yearDisplay={'block'}
                                    position={'absolute'}
                                    name={[v.title, v.name]} year={[v.release_date, v.first_air_date]}
                                    Genre={[genre.map((va) => va.id === v.genre_ids[0] ? va.name : ''), genre.map((va) => va.id === v.genre_ids[1] ? va.name : '')]}
                                    desc={v.overview}
                                    pstyle={' overflow-hidden'}
                                    id={v.id}
                                    media_type={v.media_type}
                                    poster_path={v.poster_path}
                                    /> : ''}

                            </div>
                        )
                    }
                    <Slider {...settings} >
                        {Movies5.map((v, i) =>
                            <img key={i} src={v.poster_path ? `https://image.tmdb.org/t/p/original/${v.backdrop_path}` : 'public/backdropNotFound.jpg'} alt="" />
                        )}
                    </Slider>
                </div>
            </div>


        </div>
    )
}