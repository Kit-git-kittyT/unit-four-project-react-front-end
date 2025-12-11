import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getInterests, deletePost } from '../services/interests'

function Interests() {

  const [interests, setInterests] = useState([])

  let { id } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    const fetchInterests = async () => {
      const interestsData = await getInterests()
      setInterests(interestsData)
    }

    fetchInterests()
  }, [])

  const handleDelete = async () => {
    await deletePost(id)
    navigate('/interests')
  }

  if (!interests.length) return <h1 style={{textAlign: "center"}}>Feel free to share what you are passionate about!</h1>

  return (
    <div className='interests-root'>
      <div className="interests-container">
        {interests.length && interests.map((interest) => (
          <div key={interest.id} className="interest-card">
              <Link to={`/interests/${interest.id}`}>{interest.passion}</Link>
              <p>{interest.thrill}</p>
              <p>{interest.challenge}</p>
              <p>{interest.skill}</p>
              <p>{interest.past_experience}</p>
              <button className="post-details-delete" onClick={handleDelete}>Delete</button>
            </div>
            
        ))}
      </div>
    </div>
  )
}

export default Interests