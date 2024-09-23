import React from 'react'

const NavBar = ({setCardContent}) => {
    const navs = [
        {
            'title':'Standings',
            'slug':'standings'
        },
        {
            'title':'Teams',
            'slug':'teams'
        },
        {
            'title':'Top Scorers',
            'slug':'topscorers'
        },
    ]
    const navStyle = 'px-4 focus:text-blue-500'
  return (
    <div className='flex w-full justify-around ws-light'>
      {
        navs.map((nav)=>{
            return(
                <>
                <button onClick={()=>{setCardContent(nav.slug)}} className={navStyle}>{nav.title}</button>
                {nav.slug===navs[navs.length-1].slug?<></>:<p className='border' />}
                </>
            )
        })
      }
    </div>
  )
}

export default NavBar
