import React from 'react'
import Leagues from '../components/league/Leagues';


function getUrl(endpoint){
    const url = `https://apiv3.apifootball.com/?action=${endpoint}&APIkey=${import.meta.env.VITE_FOOTBALL_API}`;
    return url;
}


const History = () => {
  return (
    <div style={{backgroundColor:'#f0f0f0'}} id='wiki' className='w-screen flex flex-col gap-5 h-screen justify-start items-center overflow-auto'>
        <Leagues url={getUrl('get_leagues')} />
    </div>
  )
}

export default History
export {getUrl}