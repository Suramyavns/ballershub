import React, { useState } from 'react'
import LeagueTable from './LeagueTable'
import LeagueTeams from './Teams'
import LeagueTopScorers from './TopScorers'
const LeagueContent = ({content,id,data}) => {
  const contentDict = {
    'standings':<LeagueTable data={data} />,
    'teams':<LeagueTeams data={data} />,
    'topscorers':<LeagueTopScorers data={data}/>
  }
  return (
      <>
      {contentDict[content.slug]}
      </>
  )
}

export default LeagueContent
