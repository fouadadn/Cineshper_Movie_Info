import Slider from "react-slick"
import { ChevronRight, ChevronLeft } from 'lucide-react';
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

export default function ExploreGenres({ Genre, backdropImage }) {

    let back;
    { backdropImage.map((v, i) => back = v.backdrop_path) }

    let listSlice = backdropImage.slice(0, 19)
    return (
        <div className="text-white px-4 lg:px-10 pt-32">
            <h1 className="text-3xl font-bold">Explore Genres</h1>
            <p>See Wide Range of genres you like</p>

            <div className="relative top-">
                <div className="z-50  px-4 lg:px-10 my-6 ">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                        navigation
                        // pagination={{ clickable: true }}
                        FreeMode={{ enabled: true }}
                        spaceBetween={50}
                        // Navigation={{ enabled: true }}
                        slidesPerView={6}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="overflow-visible">

                        {
                            listSlice.map((v, i) =>
                                <SwiperSlide key={i} className="py-10" >
                                    <div className="group border-[#7300FF] hover:border-[1px] h-[106px] rounded-xl duration-500 ">
                                        <img src={v.backdrop_path ? `https://image.tmdb.org/t/p/original/${v.backdrop_path}` : '/posternotFound.jpg'} className="w-[150px] md:w-[200px] rounded-xl brightness-50 " />
                                        <p className="relative bottom-[84px] md:bottom-[105px]  w-[150px] md:w-[187px] flex justify-center items-center h-[84px] md:h-[105px] font-bold text-xl  rounded-xl group-hover:bg-[#7300FF30] ">
                                            <span >
                                                {Genre[i] !== undefined ? Genre[i].name : ''}
                                            </span>
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    )
}