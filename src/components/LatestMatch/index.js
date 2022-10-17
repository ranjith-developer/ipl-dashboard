// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    date,
    venue,
    result,
    umpires,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestDetails

  return (
    <div className="latest-container">
      <div className="left-container">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="right-container">
        <h1 className="innings">First Innings</h1>
        <p className="score">{firstInnings}</p>
        <h1 className="innings">Second Innings</h1>
        <p className="score">{secondInnings}</p>
        <h1 className="innings">Man of The Match</h1>
        <p className="score">{manOfTheMatch}</p>
        <h1 className="innings">Umpires</h1>
        <p className="score">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
