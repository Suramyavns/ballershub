import { useEffect, useState } from 'react';
import Video from './pages/Video';
import Livescore from './pages/Livescore'
import History from './pages/History';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faVideo, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFutbolBall } from '@fortawesome/free-regular-svg-icons';
const App = () =>{
    const [page,setPage]=useState({
        description:'live',
        content:<Livescore/>
    })
    const [loading,setLoading]=useState(true)
    const navBtnStyle = 'w-20 md:w-15 h-full p-3 m-1 rounded flex flex-col justify-center items-center ws-light '
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
    useEffect(()=>{
        setLoading(false)
    },[page])
    return(
        <div className='flex flex-col h-screen justify-evenly items-center w-full'>
            {loading?<FontAwesomeIcon size='3x' icon={faFutbolBall} className='animate-spin'/>:page.content}
            <div
            className='bg-white fixed -bottom-2 h-16 flex justify-center w-full px-5 rounded-md gap-3 pb-3'>
                <button aria-labelledby='Watch Live' onClick={showLiveScore} className={navBtnStyle} type="button">
                    <FontAwesomeIcon color='black' icon={faWifi} />
                    <p id='Watch Live' className='hidden sm:flex'>Live</p>
                </button>
                <button aria-labelledby='Watch Video' onClick={showVideo} className={navBtnStyle} type="button">
                    <FontAwesomeIcon color='black' icon={faVideo} />
                    <p id='Watch Video' className='hidden sm:flex'>Video</p>
                </button>
                <button aria-labelledby='Check Wiki' onClick={showHistory} className={navBtnStyle} type="button">
                    <FontAwesomeIcon color='black' icon={faBook} />
                    <p id='Check Wiki' className='hidden sm:flex'>Wiki</p>
                </button>
            </div>
        </div>
    )
}

export default App;