import { faFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "../Image";

const LeagueTable = ({data}) =>{
    useEffect(()=>{console.log(data)},[data])
    return(
        <div className="h-full w-full flex flex-col overflow-auto gap-1">
            <span className="flex py-2 px-1 border border-x-0 border-b-0 font-semibold justify-between">
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
            {data.length > 0?data.map((teamData)=>{
                return(
                    <span className="flex py-2 border border-x-0 border-b-0 items-center justify-center">
                        <span className="flex justify-start items-center w-1/2">
                            <p className="hidden sm:flex ml-5">{teamData.overall_league_position}</p>
                            <Image style="w-4 mx-1 md:mx-4" src={teamData.team_badge} />
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
            }):
            <span className="flex justify-center items-center h-full gap-2 font-bold text-2xl">
                <FontAwesomeIcon icon={faFrown} />
                <p>Data Unavailable</p>
            </span>
            }
        </div>
    )
}

export default LeagueTable;