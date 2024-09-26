import { useEffect, useState } from "react";

const LeagueTable = ({data}) =>{
    useEffect(()=>{},[data])
    return(
        <div className="h-full w-full flex flex-col overflow-auto gap-1">
            <span className="flex py-2 px-1 border border-x-0 border-b-0 font-semibold justify-center">
                <span className="flex justify-start items-center w-5/12 md:w-1/2 sm:mr-3">
                    <p>Club</p>
                </span>
                <span className="flex w-1/2 gap-2 justify-evenly">
                    <p className="w-10 flex justify-center">PTS</p>
                    <p className="w-10 flex justify-center">GF</p>
                    <p className="w-10 flex justify-center">GA</p>
                    <p className="w-10 flex justify-center">W</p>
                    <p className="w-10 flex justify-center">L</p>
                    <p className="w-10 flex justify-center">D</p>
                </span>
            </span>
            {data.map((teamData)=>{
                return(
                    <span className="flex py-2 border border-x-0 border-b-0 items-center justify-center">
                        <span className="flex justify-start items-center w-1/2">
                            <img className="w-4 mx-1 md:mx-4" loading="lazy" src={teamData.team_badge} alt='logo' />
                            <p className="text-xs sm:text-lg">{teamData.team_name}</p>
                        </span>
                        <span className="flex justify-evenly gap-3.5 md:gap-2 w-1/2">
                            <p className="w-10 justify-center flex">{teamData.overall_league_PTS}</p>
                            <p className="w-10 justify-center flex">{teamData.overall_league_GF}</p>
                            <p className="w-10 justify-center flex">{teamData.overall_league_GA}</p>
                            <p className="w-10 justify-center flex">{teamData.overall_league_W}</p>
                            <p className="w-10 justify-center flex">{teamData.overall_league_L}</p>
                            <p className="w-10 justify-center flex">{teamData.overall_league_D}</p>
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

export default LeagueTable;