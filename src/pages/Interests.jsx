import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getInterests } from '../services/interests'

function Interests() {

  const [interests, setInterests] = useState([])

  useEffect(() => {
    const fetchInterests = async () => {
      const interestsData = await getInterests()
      setInterests(interestsData)
    }

    fetchInterests()
  }, [])

  if (!interests.length) return <h1 style={{textAlign: "center"}}>Feel free to share what you are passionate about!</h1>

  return (
    <div className='interests-root'>
      <h1>Cat List</h1>
      <div className="interests-container">
        {interests.length && interests.map((interest) => (
          <div key={interest.id} className="interest-card">
              <Link to={`/interests/${interest.id}`}>
              </Link>
              <h2>{interest.passion}</h2>
              <p>{interest.thrill}</p>
              <p>{interest.challenge}</p>
              <p>{interest.skill}</p>
              <p>{interest.past-experience}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Interests