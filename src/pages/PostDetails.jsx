import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCat, deleteCat, addToyForCat, removeToyFromCat } from "../services/cats.js";
import { getCatFeedings, addCatFeeding } from "../services/comments.js";
import CommentBox from "../components/CommentBox.jsx";

function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const [postComment, setPostComment] = useState([])
  const [toggle, setToggle] = useState(false)

  const [comment, setComment] = useState({
    category: "Appreciation"
  });

  let { postId } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    const fetchInterest = async () => {
      const interestData = await getPost(postId);
      const commentData = await getCommentBox(postId)
      setPostDetails(postData);
      setCommentBox(commentData)
    };

    fetchInterest();
  }, [interestId, toggle]);

  const handleDelete = async () => {
    await deleteInterest(interestId)
    navigate('/interests')
  }

  const handleCategoryChange = (e) => {
    const { name, value } = e.target

    setComment((prevComment) => ({
      ...prevComment,
      [name]: value
    }))
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    
    const categoryMap = {
        A: "Appreciation",
        I: "Impression",
        G: "Growth",
        S: "Suggestion",
        D: "Discussion",
    };

    const { category } = comment

    const finalComment = {
      comment: commentMap[comment]
    } // mealMap[meal] Converts "Breakfast" to "B" for django model

    const createdComment = await addPostComment(postId, finalcomment)
    
    if (createdComment) {
      setToggle(prev => !prev)
    }
  }

  return (
    <div className="cat-detail-root">
      <div className="cat-detail-container">
        <img src={catDetailAvatar} alt="cat avatar" />
        <div>
          <h2>{catDetail?.cat?.name}</h2>
          <p>
            A {catDetail?.cat?.age} year old {catDetail?.cat?.breed} cat
          </p>
          <p>{catDetail?.cat?.description}</p>
          <div>
            <Link to={`/cats/${catDetail?.cat?.id}/edit`}>
              <button className="cat-detail-edit">Edit</button>
            </Link>
            <button className="cat-detail-delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className="cat-detail-bottom-container">
        <div className="feedings-container">
          <h2>Feedings</h2>
          <h3>Add a Feeding</h3>
          {catDetail?.cat?.fed_for_today ?
            <p>{catDetail?.cat?.name} has been fed all their meals today! 🥰</p> : <p>Looks like {catDetail?.cat?.name} is still hungry 😔</p>}
          <form onSubmit={handleFeedingSubmit}>
            <div>  
              <label htmlFor="feeding-date">Feeding Date: </label>
              <input
                type="date"
                name="date"
                id="feeding-date"
                value={feeding.date}
                onChange={handleDateAndMealChange}
              />
            </div>
            <div>
              <label htmlFor="feeding-meal">Meal: </label>
              <select
                name="meal"
                id="feeding-meal"
                value={feeding.meal}
                onChange={handleDateAndMealChange}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <button type="submit">Add Feeding</button>
          </form>
          <h3>Past Feedings</h3>
          <FeedingsTable feedings={catFeedings} />
        </div>
      </div>
    </div>
  );
}

export default PostDetails;