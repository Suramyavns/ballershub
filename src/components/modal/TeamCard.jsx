import { faFrown, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ImageWFallback from '../ImageWFallback'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
const TeamCard = ({data}) => {
  console.log(data.players)
  const unavailable = 'Unavailable'
  return (
    <div className='w-full flex flex-col justify-center items-center sm:px-11'>
      <div className='w-full text-xs sm:text-sm'>
        <p>Founded: {data.team_founded ?? unavailable}</p>
        <p>Venue: {data.venue.venue_name ?? unavailable}</p>
        <p>Capacity: {data.venue.venue_capacity ?? unavailable}</p>
        <p>Surface: {data.venue.venue_surface.toUpperCase() ?? unavailable}</p>
        <p>Address: {data.venue.venue_address ?? unavailable}, {data.venue.venue_city ?? unavailable}</p>
      </div>
      <div id='playerBadges' className='w-full text-xs sm:text-sm font-semibold'>
        <p className='mb-2'>Players</p>
        <div key='players' className='p-2 rounded-lg font-normal overflow-auto'>
          {
            data.players.length!==0?
            data.players.map((player)=>{
              return(
                <div className='flex justify-between my-2'>
                  <div className='flex items-center gap-2'>
                    <ImageWFallback style='w-10' src={player.player_image} fallback='/person.png' />
                    <p>{player.player_name}</p>
                    {
                      player.player_is_captain==='1'?
                      <FontAwesomeIcon color='green' size='xl' icon={faCopyright} />
                      :
                      <></>
                    }
                  </div>
                  <button
                  className='bg-slate-200 flex h-8 w-16 sm:w-fit sm:h-fit duration-500 hover:bg-slate-100 hover:text-blue-600 p-2 rounded-lg justify-center items-center gap-1'>
                    Stats
                  </button>
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
