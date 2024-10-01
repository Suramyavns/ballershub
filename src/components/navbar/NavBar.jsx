import React from 'react'

const NavBar = ({currentContent,setCardContent}) => {
    const navs = [
        {
            'title':'Standings',
            'slug':'standings',
            'endpoint':'get_standings'
        },
        {
            'title':'Teams',
            'slug':'teams',
            'endpoint':'get_teams'
        },
        {
            'title':'Fixtures',
            'slug':'fixtures',
            'endpoint':'get_topscorers'
        },
    ]
    const navStyle = 'px-4 w-full '
  return (
    <div key='navBar' className='flex w-full justify-around ws-light'>
      {
        navs.map((nav)=>{
            return(
                <button
                style={nav.slug!==navs[navs.length-1].slug?{borderRight:'1px solid gray'}:{}}
                key={nav.slug}
                onClick={()=>{setCardContent(nav)}}
                className={navStyle.concat(nav.slug===currentContent.slug?'text-blue-500':'')}>
                    {nav.title}
                </button>
            )
        })
      }
      </div>
  )
}

export default NavBar
