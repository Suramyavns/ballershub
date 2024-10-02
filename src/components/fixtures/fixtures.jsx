import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFrown } from '@fortawesome/free-regular-svg-icons'
import Image from '../Image'
import { faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
const Fixtures = ({season,data}) => {
  const [fixtures,setFixtures] = useState([])
  useEffect(()=>{
    const results = data.filter(
      (match)=>{
        return match.league_year===season
      }
    )
    setFixtures(results)
  },[data])
  return (
    <div className='flex flex-col w-full overflow-auto h-full justify-center items-center'>
      <marquee className='text-xs text-gray-400 self-start flex gap-1 py-1 items-center'>
        <FontAwesomeIcon className='mx-1' icon={faCircleInfo}/>
        Following data might be invalid if the competition hasn't started for {season}
      </marquee>
      <div className='w-full h-full overflow-auto'>
        {fixtures.length>0?
          fixtures.map(match=>{
            return(
              <div key={match.match_id} className='flex flex-col justify-center items-center border border-x-0 border-b-0 py-2'>
                <div id='fixture' className='w-full flex justify-between items-center'>
                  <div className='w-2/5 gap-2 flex justify-start items-center' id='home'>
                    <Image style='w-5 sm:w-10' src={match.team_home_badge} />
                    <p className='text-left'>{match.match_hometeam_name}</p>
                  </div>
                  <div className='flex gap-2 font-semibold justify-center items-center' id='score'>
                    <p>{match.match_hometeam_ft_score}</p>
                    <p>-</p>
                    <p>{match.match_awayteam_ft_score}</p>
                  </div>
                  <div className='w-2/5 gap-2 flex justify-end items-center' id='away'>
                    <p className='text-right'>{match.match_awayteam_name}</p>
                    <Image style='w-5 sm:w-10' src={match.team_away_badge} />
                  </div>
                </div>
                {
                  match.match_live==='1'?
                  <span className='flex justify-center items-center text-xs gap-2'>
                    <FontAwesomeIcon className='animate-pulse' color='red' icon={faCircle} />
                    <p>Live</p>
                  </span>
                  :<></>
                }

                <div className='text-gray-500 pt-2 w-full flex justify-center items-center ' id='details'>
                  <p>
                    <FontAwesomeIcon icon={faClock} /> {match.match_time} IST {match.match_date}, {match.match_stadium}
                  </p>
                </div>
              </div>
            )
          }):
          <span className="flex justify-center items-center h-full gap-2 font-bold text-2xl">
              <FontAwesomeIcon icon={faFrown} />
              <p>Data Unavailable</p>
          </span>
        }
      </div>
    </div>
  )
}

export default Fixtures
