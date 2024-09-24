import React, { useEffect, useState } from 'react'
import { getUrl } from '../pages/History'
import { fetchData } from '../utils.js/dataFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbolBall } from '@fortawesome/free-regular-svg-icons'

const ModalContent = ({content,id}) => {
    const [url,setUrl] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const getData = async() =>{
        try{
            const data = await fetchData(url);
            console.log(data)
            setIsLoading(()=>{
                return false;
            })
            
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        setIsLoading(()=>{return true})
        setUrl(()=>{
            const currentUrl = getUrl(`${content.endpoint}&league_id=${id}`)
            return currentUrl
        })
        getData()
    },[content])
  return (
    <div>
        {isLoading?<FontAwesomeIcon size='2x' icon={faFutbolBall} className='animate-spin' />:'Loaded'}
    </div>
  )
}

export default ModalContent
