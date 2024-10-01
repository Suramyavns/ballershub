import React, { useState } from 'react'
import LeagueTable from './LeagueTable'
import LeagueTeams from './Teams'
import Fixtures from '../fixtures/fixtures'
const LeagueContent = ({content,id,data}) => {
  const contentDict = {
    'standings':<LeagueTable data={data} />,
    'teams':<LeagueTeams data={data} />,
    'fixtures':<Fixtures data={data}/>
  }
  return (
      <>
      {contentDict[content.slug]}
      </>
  )
}

export default LeagueContent
