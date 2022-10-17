// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} className="team-image" alt={`${name}`} />
        <p className="card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
