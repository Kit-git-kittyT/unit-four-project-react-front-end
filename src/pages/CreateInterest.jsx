import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInterest } from "../services/interests.js";

function CreatePost() {
  let navigate = useNavigate();

  const [post, setPost] = useState({
    passion: "",
    thrill: "",
    challenge: "",
    skill: "",
    past_experience: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createInterest(post);
    navigate("/interests");
  };

  return (
    <div className="create-post-root">
      <div className="create-post-heading">
        <h2>Post</h2>
      </div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-passion"
          placeholder="Passion"
          name="passion"
          value={post.passion}
          onChange={handleChange}
          required
          autoFocus
        />
        <input
          className="input-thrill"
          placeholder="Thrill"
          name="thrill"
          value={post.thrill}
          onChange={handleChange}
          required
        />
        <textarea
          className="input-challenge"
          placeholder="Challenge"
          name="challenge"
          value={post.challenge}
          onChange={handleChange}
          required
          rows={5}
        />
        <div className="post-skill-presentation">
          <label htmlFor="post-skill">
            Please share some of your skill-set that has set you on the path towards the experience you are about to share:
          </label>
          <input
            className="input-skill"
            id="post-skill"
            type="text"
            name="skill"
            value={post.skill}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="input-past-experience"
          placeholder="Past experience"
          name="past_experience"
          value={post.past_experience}
          onChange={handleChange}
          required
          rows={20}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;