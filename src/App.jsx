import { useState, useEffect } from 'react'
import { verifyUser } from './services/users.js'
import Nav from './components/Nav'
import Home from './pages/Home'
import Register from './pages/Register'
import SignOut from './pages/SignOut.jsx'
import Interests from './pages/Interests'
import PostDetails from './pages/PostDetails'
import CreateInterest from './pages/CreateInterest'
import EditPost from './pages/EditPost'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };

    fetchUser();
  }, []);

  console.log(user)

  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/interests/add" element={<CreateInterest />} />
        <Route path="/interests/:interestsId/edit" element={<EditPost />} />
        <Route path="/interests/:postId" element={<PostDetails setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App