import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import Image from "../Image";
import TeamCard from "./TeamCard";
const LeagueTeams = ({data}) =>{
    const [displayTeamId,setDisplayTeamId] = useState(null)
    useEffect(()=>{
    },[data])
    return(
        <div className="w-full h-full flex-col flex justify-center items-center">
            <div className="flex flex-col w-full overflow-auto">
                {data.length>0?
                data.map((team)=>{
                    return(
                        <div key={team.team_key}>
                            <span key={team.team_key} className="w-full border-t-2 py-2 flex justify-between items-center gap-2">
                                <span className="flex gap-3 items-center">
                                    <Image src={team.team_badge} style='w-8' />
                                    <p className="text-xs sm:text-lg">{team.team_name}</p>
                                </span>
                                <span className="mx-4 w-fit flex justify-center items-center">
                                    <button
                                    className=" bg-slate-200 flex h-8 w-16 sm:w-fit sm:h-fit duration-500 hover:bg-slate-100 hover:text-blue-600 p-2 rounded-lg justify-center items-center gap-1"
                                    type="button"
                                    onClick={()=>{
                                        setDisplayTeamId(()=>{
                                            return displayTeamId===team.team_key?null:team.team_key
                                        })
                                    }}>
                                        <p className="hidden sm:block">Know</p>
                                        <p>{displayTeamId===team.team_key?'Less':'More'}</p>
                                    </button>
                                </span>
                            </span>
                            {
                                displayTeamId===team.team_key?<TeamCard data={team} />:<></>
                            }
                        </div>
                    )
                })
                :
                <span className="flex justify-center items-center h-full gap-2 font-bold text-2xl">
                    <FontAwesomeIcon icon={faFrown} />
                    <p>Data Unavailable</p>
                </span>
                }
            </div>
        </div>
    )
}

export default LeagueTeams;