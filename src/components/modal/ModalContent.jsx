import React, { useEffect, useState } from 'react'
import { getUrl } from '../../pages/History'
import { fetchData } from '../../utils.js/dataFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbolBall } from '@fortawesome/free-regular-svg-icons'
import LeagueContent from './LeagueContent'
const ModalContent = ({content,id}) => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const getData = async(url) =>{
        try{
            const data = await fetchData(url);
            setData(()=>{
                return data
            })
            setIsLoading(()=>{
                return false;
            })
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        setIsLoading(()=>{return true})
        const newUrl = getUrl(`${content.endpoint}&league_id=${id}`);
        getData(newUrl)
    },[content])
  return (
    <>
        {isLoading?<FontAwesomeIcon size='2x' icon={faFutbolBall} className='animate-spin' />:
        <LeagueContent content={content} id={id} data={data} />}
    </>
  )
}

export default ModalContent
