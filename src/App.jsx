import { useState } from 'react';
import Video from './pages/Video';
import Livescore from './pages/Livescore'
import History from './pages/History';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';

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
    const showHistory = () =>{
        setPage(()=>{
            return {
                description:'history',
                content:<History/>
            }
        })
    }
    return(
        <div className='flex flex-col justify-evenly items-center w-full'>
            {page.content}
            <div className='fixed -bottom-2 h-16 flex justify-center bg-white w-full px-5 rounded-md gap-3 pb-3'>
                <button onClick={showLiveScore} className={navBtnStyle} type="button">
                    <FontAwesomeIcon icon={faWifi} />
                    <p className='hidden sm:flex'>Live</p>
                </button>
                <button onClick={showVideo} className={navBtnStyle} type="button">
                    <FontAwesomeIcon icon={faVideo} />
                    <p className='hidden sm:flex'>Video</p>
                </button>
                <button onClick={showHistory} className={navBtnStyle} type="button">
                    <FontAwesomeIcon icon={faFutbol} />
                    <p className='hidden sm:flex'>History</p>
                </button>
            </div>
        </div>
    )
}

export default App;