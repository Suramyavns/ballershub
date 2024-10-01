import React from 'react'


const TeamCard = ({data}) => {
  const unavailable = 'Unavailable'
  return (
    <div className='w-full flex justify-center items-center sm:px-11'>
      <div className='w-full text-xs sm:text-sm'>
        <p>Founded: {data.team_founded ?? unavailable}</p>
        <p>Venue: {data.venue.venue_name ?? unavailable}</p>
        <p>Capacity: {data.venue.venue_capacity ?? unavailable}</p>
        <p>Surface: {data.venue.venue_surface.toUpperCase() ?? unavailable}</p>
        <p>Address: {data.venue.venue_address ?? unavailable}, {data.venue.venue_city ?? unavailable}</p>
      </div>
    </div>
  )
}

export default TeamCard
