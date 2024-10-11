import HomePageSlider from './ui/HomePageSilder';
import { useEffect, useState } from 'react';
import MovieAndshowsSlider from './ui/Movies&ShowsSlider';
import SecondSlider from './ui/secondSlider';
import Movies from './ui/backdropMandS';
import ExploreGenres from './ui/exploreGenre';
import Questions from '../Home/Q&A/Questions'
import Footer from '../../components/footer/footer';

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [topmovies, setTopMovies] = useState([]);
    const [genre, setGenre] = useState([])
    const [Showsgenre, setShowsGenre] = useState([])


    useEffect(() => {
        async function fetchdata() {

            await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
                .then(response => response.json())
                .then(response => setMovies(response.results))
                .catch(err => console.error(err));
        }

        fetchdata()

        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
            .then(response => response.json())
            .then(response => setTopMovies(response.results))
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
            .then(res => res.json())
            .then(res => setGenre(res.genres))


        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=091d4817f9045622142ffd67a08b2d15')
            .then(res => res.json())
            .then(res => setShowsGenre(res.genres))


        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=091d4817f9045622142ffd67a08b2d15')
            .then(response => response.json())
            .then(response => setShows(response.results))
            .catch(err => console.error(err));
    }, [])



    return (
        <div className='bg-black w-full flex flex-col'>
            <HomePageSlider movieDetail={topmovies} genre={genre} />
            <div className='space-y-32 mt-10 flex z-50 flex-col'>
                <MovieAndshowsSlider title={'Latest Release Movies'} moviesorshows={movies} genre={'movie'} />
                <MovieAndshowsSlider title={'Trending Movies & Shows'} moviesorshows={topmovies} />
            </div>




            <div>
                <SecondSlider />
            </div>
            <div className='space-y-10 mt-14 md:mt-80 z-50 bg-black'>
                <Movies moviesorshows={movies} title={'Movies'} genre={genre} media_type={'movie'} />
                <Movies moviesorshows={shows} title={'Shows'} genre={Showsgenre} media_type={'tv'} />
            </div>
            <ExploreGenres Genre={genre} backdropImage={movies} />

            <div className=''>
                <Questions />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}