const Video = () => {
  const scoreBat_API = import.meta.env.VITE_SCOREBAT_TOKEN;
  return (
    <iframe
        src={`https://www.scorebat.com/embed/videofeed/?token=${scoreBat_API}`}
        allow="autoplay"
        style={{ width: "100%", height: '100vh', overflow: "hidden", display: "block" }}
        className="_scorebatEmbeddedPlayer_"
    />
  )
}

export default Video
