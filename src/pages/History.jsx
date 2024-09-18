import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const flagTwStyle = 'bg-gray-200 p-2 rounded-lg h-fit w-fit'
const History = () => {
    const [content,setContent]=useState({
        'Countries':{
            'key':1,
            'data':[
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
            ]
        },
        'Teams':{
            'key':2,
            'data':[
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
                'dummy data',
            ]
        }
    })
    const contents = []
    for(let item in content){
        const boxes = []
        const data = content[item].data
        for(let key of data.keys()){
            boxes.push(
                <div key={key} className={flagTwStyle}>
                    {data[key]}
                </div>
            )
        }
        contents.push(
            <div key={item.key} className='w-11/12 p-3 flex flex-col text-left border rounded-lg'>
                <p className='ws-bold text-2xl'>{item}</p>
                <div className='flex gap-3 overflow-auto p-2'>
                    {boxes}
                </div>
            </div>
        )
    }
  return (
    <div className='w-screen flex flex-col gap-5 h-full justify-center items-center overflow-auto m-3'>
        {contents}
        <div className='h-20'></div>
    </div>
  )
}

export default History
