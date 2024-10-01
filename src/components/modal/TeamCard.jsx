import { faFrown } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ImageWFallback from '../ImageWFallback'
const TeamCard = ({data}) => {
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
        <div className='bg-slate-100 p-2 rounded-lg font-normal overflow-auto'>
          {
            data.players.length!==0?
            data.players.map((player)=>{
              return(
                <div className='flex items-center gap-2'>
                  <ImageWFallback style='w-10' src={player.player_image} fallback='/person.png' />
                  <p>{player.player_name}</p>
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
