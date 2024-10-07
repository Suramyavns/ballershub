import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils.js/dataFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFutbolBall } from '@fortawesome/free-regular-svg-icons';
import './Leagues.css'
import Modal from '../modal/Modal';
import Image from '../Image';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
const Leagues = (props) => {
    const [selection,setSelection] = useState({})  
    const [showSelection,setShowSelection] = useState(false)
    const [filter,setFilter]=useState('')
    const [isLoading,setIsLoading] = useState(false);
    const [leagues,setLeagues]=useState([])
    async function fetchLeagues(leaguesUrl){
        try{
            const data = await fetchData(leaguesUrl);
            setLeagues(()=>{
                return data
            })
            setIsLoading(()=>{
                return false;
            })
            
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        setIsLoading(()=>{
            return true;
        })
        fetchLeagues(props.url)
    },[])
    const handleFlagClick = (league)=>{
        setShowSelection(true);
        setSelection(league);
    }
    const flagStyle = 'h-24 sm:h-32 aspect-square shadow-md hover:shadow-2xl duration-500 p-1'
  return (
    <div id="leagues" className='flex flex-col w-11/12 gap-2 text-left border bg-slate-50 rounded-lg p-3 m-2'>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
            {
                leagues.length<10?
                <marquee className='text-xs text-gray-400 self-start flex gap-1 py-1 items-center'>
                    <FontAwesomeIcon className='mx-1' icon={faCircleInfo}/>
                    If you do not see sufficient data here then probably the servers are down
                </marquee>
                :''
            }
            <input onChange={(e)=>{setFilter(e.target.value.toLowerCase().trim())}} type="search" className='focus:outline-none rounded-lg border text-sm p-1 w-11/12' placeholder='Filter by name or country' />
        </div>
        <div className='flex flex-wrap gap-3 overflow-auto items-center justify-center h-full'>
            {isLoading?<FontAwesomeIcon size='3x' icon={faFutbolBall} className='animate-spin' />:leagues.map((league)=>{
                if(filter!==''){
                    if(league.league_name.toLowerCase().startsWith(filter) || league.country_name.toLowerCase().startsWith(filter)){
                        return (
                            <button aria-label='Checkout this league' key={league.league_id} onClick={()=>{handleFlagClick(league)}}>
                                <Image src={league.league_logo} style={flagStyle} title={`${league.league_name},${league.country_name}`} />
                            </button>
                        )
                    }
                }
                else{
                    return (
                        <button aria-label='Checkout this league' key={league.league_id} onClick={()=>{handleFlagClick(league)}}>
                            <Image src={league.league_logo} style={flagStyle} title={`${league.league_name},${league.country_name}`} />
                        </button>
                    )
                }
            })}
        </div>
        <Modal data={selection} showModal={showSelection} setShowModal={setShowSelection} />
    </div>
  )
}

export default Leagues
