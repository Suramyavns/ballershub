import { faFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "../Image";
import { v4 } from "uuid";

const LeagueTable = ({data}) =>{
    useEffect(()=>{},[data])
    return(
        <div className="h-full w-full flex flex-col overflow-auto gap-1">
            <span className="flex py-2 px-1 border border-x-0 border-b-0 font-semibold justify-between text-xs sm:text-lg">
                <span className="flex justify-start items-center w-5/12 md:w-1/2">
                    <p>Club</p>
                </span>
                <span className="flex w-1/2 gap-1 sm:gap-2 justify-evenly">
                    <p className="w-10 flex justify-center">PTS</p>
                    <p className="w-10 flex justify-center">GF</p>
                    <p className="w-10 flex justify-center">GA</p>
                    <p className="w-10 flex justify-center">W</p>
                    <p className="w-10 flex justify-center">L</p>
                    <p className="w-10 flex justify-center">D</p>
                </span>
            </span>
            <div className="overflow-auto">
            {data.length > 0?data.map((teamData)=>{
                return(
                    <span key={teamData.team_id} className="flex py-2 border border-x-0 border-b-0 items-center justify-center text-xs sm:text-lg">
                        <span className="flex justify-start items-center w-1/2">
                            {teamData.league_round?
                            <>
                            <p className="sm:hidden font-semibold">{teamData.league_round.slice(5,7)}:</p>
                            <p className="hidden sm:block mr-2 font-semibold">{teamData.league_round}</p>                            </>
                            :''}
                            <p>{teamData.overall_league_position}</p>
                            <Image style="w-4 mx-1 md:mx-4" src={teamData.team_badge} />
                            <p>{teamData.team_name}</p>
                        </span>
                        <span className="flex justify-evenly w-1/2">
                            <p className="w-10 justify-evenly sm:justify-center flex">{teamData.overall_league_PTS}</p>
                            <p className="w-10 justify-evenly sm:justify-center flex">{teamData.overall_league_GF}</p>
                            <p className="w-10 justify-evenly sm:justify-center flex">{teamData.overall_league_GA}</p>
                            <p className="w-10 justify-evenly sm:justify-center flex">{teamData.overall_league_W}</p>
                            <p className="w-10 justify-evenly sm:justify-center flex">{teamData.overall_league_L}</p>
                            <p className="w-10 justify-evenly sm:justify-center flex">{teamData.overall_league_D}</p>
                        </span>
                    </span>
                )
            }):
            <span className="flex justify-center items-center h-full gap-2 font-bold text-2xl">
                <FontAwesomeIcon icon={faFrown} />
                <p>Data Unavailable</p>
            </span>
            }
            </div>
        </div>
    )
}

export default LeagueTable;