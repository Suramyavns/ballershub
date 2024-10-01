import React from 'react'

const PlayerCard = ({data}) => {
  return (
    <div className='flex justify-center'>
      {data.player_key}
    </div>
  )
}

export default PlayerCard
