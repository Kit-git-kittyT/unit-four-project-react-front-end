import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInterest, updateInterest } from "../services/interests.js";

function EditPost() {
  let navigate = useNavigate();

  const [post, setPost] = useState({
    passion: "",
    thrill: "",
    challenge: "",
    skill: "",
    pastExperience: "",
  });

  let { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getInterest(postId);
      setPost(postData.post);
    };

    fetchPost();
  }, [postId]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateInterest(postId, post);
    navigate(`/interests/${postId}`);
  };

  return (
    <div className="edit-post-root">
      <div className="edit-post-heading">
        <h2>Update your Post's Content</h2>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          className="input-passion"
          placeholder="Name"
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
            name="skill set"
            value={post.skill}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="input-past-experience"
          placeholder="Past experience"
          name="past experience"
          value={post.pastExperience}
          onChange={handleChange}
          required
          rows={20}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPost;