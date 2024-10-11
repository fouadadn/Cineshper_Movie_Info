import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useNavigate } from "react-router-dom";

export default function MovieAndshowsSlider({ title, moviesorshows , genre}) {
  const navigate = useNavigate()

  return (
    <div className="text-white space-y-10 px-4 lg:px-10 z-50 hhh  ">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <div className='flex  overflow-auto gap-4 lg:gap-8 py-4  [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF]'>
        {moviesorshows.map((v, i) =>
          <div key={i} className='flex-shrink-0'>
            <button onClick={() => {
              navigate(`/${v?.id}?type=${v?.media_type ?  v?.media_type  : genre }`)
            }}>
              <img src={v.poster_path ? `https://image.tmdb.org/t/p/w300/${v.poster_path}` : '/posternotFound.jpg'} alt="" className="w-48 rounded-tr-3xl rounded-bl-3xl" />
              <div>
                <h1 className="text-lg w-48">{v.title} {v.name}</h1>
                <span className="text-[#7300FF] tetxt-sm">{v.release_date}{v.first_air_date}</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}