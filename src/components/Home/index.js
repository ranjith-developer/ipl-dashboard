// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isTrue: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const newList = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: newList, isTrue: false})
  }

  render() {
    const {teamsList, isTrue} = this.state

    return (
      <>
        <div className="main-container">
          {isTrue && (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}
          {!isTrue && (
            <>
              <div className="logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  className="ipl-logo"
                  alt="ipl logo"
                />
                <h1 className="logo-name">IPL Dashboard</h1>
              </div>
              <ul className="db-list">
                {teamsList.map(eachTeam => (
                  <TeamCard key={eachTeam.id} teamItem={eachTeam} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}

export default Home
