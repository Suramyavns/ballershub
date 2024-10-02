import React, { useState } from 'react'
import LeagueTable from './LeagueTable'
import LeagueTeams from './Teams'
import Fixtures from '../fixtures/fixtures'
const LeagueContent = ({season,content,id,data}) => {
  const contentDict = {
    'standings':<LeagueTable data={data} />,
    'teams':<LeagueTeams data={data} />,
    'fixtures':<Fixtures season={season} data={data}/>
  }
  return (
      <>
      {contentDict[content.slug]}
      </>
  )
}

export default LeagueContent
