import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import auth from "../firebase/firebase"

export default function LoggendIn() {
    const { currentUser } = useAuth()
    const { logOut } = useAuth()
    const { removeUser } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [watchList, setwatchList] = useState([])
    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/Account')
        } catch {
            setError('failed to log Out')
        }
    }
    const handledeleteUser = () => {
        removeUser()
    }

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFkNDgxN2Y5MDQ1NjIyMTQyZmZkNjdhMDhiMmQxNSIsIm5iZiI6MTcyODkyMzkzMS4xODUwNDYsInN1YiI6IjY2ZjdkZDc5MmM0YmRjOWRiMDVmMjUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-zUWikNMlKeYAPe7NNkAvUVXqWRBv-UMlGXtvo-F-U'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/account/${currentUser.uid}/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    } , [])
    // console.log(currentUser)
    return (
        <>
            <div className="pt-32 flex justify-between items-center px-4  mb-5 ">
                <div className="bg-[#7300ff7b] flex justify-between w-full items-center rounded-2xl py-2 px-3">
                    <div className="flex gap-3 items-center">
                        <div className="bg-violet-600 w-40 h-40 rounded-full flex justify-center items-center">
                            <span className='text-white bg-black  rounded-full p-2 block w-10 h-10 text-center font-bold '><span className='relative top-[2px] left-[1px] '>{String(currentUser.currentUser?.displayName)?.split(' ')[0]?.slice(0, 1)} {String(currentUser.currentUser?.displayName)?.split(' ')[1]?.slice(0, 1)}</span></span>
                        </div>
                        <div className="">
                            <p className="text-white">Email : {currentUser && currentUser.email}</p>
                            <p className="text-white">Member Since : {currentUser && String(currentUser.metadata.creationTime).split(' ').slice(0, 4).join(' ')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button onClick={handleLogout} className="text-white bg-violet-600 rounded-lg px-4 py-2">log Out</button>
                        <button onClick={handledeleteUser} className="text-white bg-red-600 rounded-lg px-4 py-2">Delete Account</button>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-10 ">
                <div className="text-white flex gap-4">
                    <h1 className=" text-3xl font-bold">My Whatchlist</h1>
                    <button className="hover:border-b-[3px] hover:border-violet-600 " onClick={() => { setwatchList(0) }}>Movies <span className="text-white/80">0</span></button>
                    <button className="hover:border-b-[3px] hover:border-violet-600 " onClick={() => { setwatchList(1) }}>Tv Shows <span className="text-white/80">0</span></button>
                </div>
                <div className="text-white ml-3">
                    {/* {
                        watchList === 0 ? <p>You haven't added any Movies to your watchlist</p> : <p>You haven't added any Tv Shows to your watchlist</p>
                    } */}
                    {
                        watchList.map((v)=> console.log(v))
                    }
                </div>
            </div>
        </>
    )
}