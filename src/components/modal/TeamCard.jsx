import { faFrown, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ImageWFallback from '../ImageWFallback'
import { faCake, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '@mui/material'
const TeamCard = ({season,data}) => {
  const [showPlayer,setShowPlayer] = useState(null)
  const unavailable = 'Unavailable'
  return (
    <div className='w-full flex flex-col justify-center items-center sm:px-11'>
      <div className='w-full text-xs sm:text-sm'>
        <p>Founded: {data.team_founded ?? unavailable}</p>
        <p>Venue: {data.venue.venue_name ?? unavailable}</p>
        <p>Capacity: {data.venue.venue_capacity ?? unavailable}</p>
        <p>Surface: {data.venue.venue_surface.toUpperCase() ?? unavailable}</p>
        <p>Address: {data.venue.venue_address ?? unavailable}, {data.venue.venue_city ?? unavailable}</p>
        <p>Coach: {data.coaches[0].coach_name}</p>
      </div>
      <div id='playerBadges' className='w-full text-xs sm:text-sm font-semibold'>
        <p className='mb-2'>Players</p>
        <div key='players' className='p-2 rounded-lg font-normal overflow-auto'>
          {
            data.players.length!==0?
            data.players.map((player)=>{
              return(
                <div>
                  <div className='flex w-full justify-between sm:justify-evenly items-center my-2'>
                  <div className='flex w-1/2 items-center gap-2'>
                    <ImageWFallback style='w-10' src={player.player_image} fallback='/person.png' />
                    <p>{player.player_name}</p>
                    {
                      player.player_is_captain==='1'?
                      <FontAwesomeIcon color='green' size='xl' icon={faCopyright} />
                      :
                      <></>
                    }
                  </div>
                  <div id='playerDetails' className='w-1/2 hidden sm:flex justify-evenly items-center'>
                    {
                      player.player_rating!==''?
                      <Rating name='read-only' readOnly value={parseInt(player.player_rating)/2} />
                      :
                      <p className='text-lg text-gray-400'>Unavailable</p>
                    }
                  </div>
                  <button
                  aria-labelledby='Checkout Player Stats'
                  onClick={()=>{
                    setShowPlayer(()=>{
                      return showPlayer===player.player_id? null:player.player_id
                    })
                  }}
                  className='bg-slate-200 flex h-8 w-16 sm:w-fit sm:h-fit duration-500 hover:bg-slate-100 hover:text-blue-600 p-2 rounded-lg justify-center items-center gap-1'>
                    <p id='Checkout Player Stats'>Stats</p>
                  </button>
                </div>
                {
                  showPlayer===player.player_id && 
                  <div className='w-full flex flex-col'>
                    <span className='sm:hidden'>
                      {
                        player.player_rating!==''?
                        <Rating name='read-only' readOnly value={parseInt(player.player_rating)/2} />
                        :
                        <></>
                      }
                    </span>
                    <p>Age: {player.player_age} 
                      <span className='mx-2 text-gray-500'>
                        <FontAwesomeIcon icon={faCake} /> {new Date(player.player_birthdate).toUTCString().slice(5,16)}
                      </span>  
                    </p>
                    <p className='ws-bold'>Stats for the season {season}</p>
                    <p>Position: {player.player_type}</p>
                    <p>Appearences: {player.player_match_played}</p>
                    {
                      player.player_type==='Goalkeepers'?
                      <>
                      <p>Saves: {player.player_saves}</p>
                      <p>Conceded: {player.player_goals_conceded}</p>
                      </>
                      :
                      <p>Goals: {player.player_goals}</p>
                    }
                    <p>Assists: {player.player_assists}</p>
                    <p>Total Passes: {player.player_pases}</p>
                    <p>Passing Accuracy: {Math.round((parseFloat(player.player_passes_accuracy)/parseFloat(player.player_passes))*100)}% </p>
                    <p>Dribbling Success: {Math.round((parseFloat(player.player_dribble_succ)/parseFloat(player.player_dribble_attempts))*100)}% </p>
                  </div>
                }
                </div>
              )
            })
            :
            <div className='font-bold w-full flex justify-center items-center gap-2'>
              <FontAwesomeIcon size='lg' icon={faFrown} />
              <p>Data Unavailable</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default TeamCard
