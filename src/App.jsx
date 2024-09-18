import { useState } from 'react';
import Video from './pages/Video';
import Livescore from './pages/Livescore'

const App = () =>{
    const [page,setPage]=useState({
        description:'live',
        content:<Livescore/>
    })
    const navBtnStyle = 'w-20 md:w-15 h-full p-3 m-1 rounded flex flex-col justify-center items-center text-gray-800 ws-bold hover:bg-slate-100'
    const showLiveScore = () =>{
        setPage(()=>{
            return {
                description:'live',
                content:<Livescore/>
            }
        })
    }
    const showVideo = () =>{
        setPage(()=>{
            return {
                description:'video',
                content:<Video/>
            }
        })
    }
    return(
        <div className='flex flex-col justify-evenly items-center w-full'>
            {page.content}
            <div className='fixed -bottom-2 h-16 flex justify-center bg-white w-full px-5 rounded-md gap-3 pb-3'>
                <button onClick={showLiveScore} className={navBtnStyle} type="button">
                    <img className='w-7 opacity-80' src="/live.png" alt="Live" />
                    <p className='hidden sm:flex'>Live</p>
                </button>
                <button onClick={showVideo} className={navBtnStyle} type="button">
                    <img className='w-7 opacity-80' src="/video.png" alt="" />
                    <p className='hidden sm:flex'>Video</p>
                </button>
            </div>
        </div>
    )
}

export default App;