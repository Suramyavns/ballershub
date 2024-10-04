
const Livescore = () => {
  const scoreBat_API = import.meta.env.VITE_SCOREBAT_TOKEN;
  return (
    <iframe
    title="Live Feed"
    src={`https://www.scorebat.com/embed/livescore/?token=${scoreBat_API}`}
    allow="autoplay"
    style={{ width: "100%", height: '100vh', display: "block" }}
    />
  )
  
}

export default Livescore
