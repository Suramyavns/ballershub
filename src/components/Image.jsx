const Image = ({src,style,title=''}) =>{
    return(
        <>
        {
            src!==''?
            <img title={title} className={style} src={src} loading="lazy" />:<></>
        }
        </>
    )
}

export default Image;