import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getInterest, deletePost} from "../services/interests.js";
import { getComments, addPostComment } from "../services/comments.js";
import CommentBox from "../components/CommentBox.jsx";

function PostDetails({ user }) {
  const [postDetails, setPostDetails] = useState(null);
  const [postComment, setPostComment] = useState([])
  const [toggle, setToggle] = useState(false)

  const [comment, setComment] = useState({
    category: "Appreciation"
  });
console.log('post details ', user)

  let { postId } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    const fetchInterest = async () => {
      const interestData = await getPost(postId);
      const commentData = await getCommentBox(postId)
      setPostDetails(postData);
      setPostComment(commentData)
    };

    fetchInterest();
  }, [interestId, toggle]);

  const handleDelete = async () => {
    await deletePost(postId)
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
    }

    const createdComment = await addPostComment(postId, finalcomment)
    
    if (createdComment) {
      setToggle(prev => !prev)
    }
  }

  return (
    <div className="post-detail-root">
      <div className="post-detail-container">
        <div>
          <h2>{postDetails?.post?.passion}</h2>
          <p>
            {user.username} shared : {postDetails?.post?.thrill}
            Hereby, the {user.username} declared: {postDetails?.post?.challenge}.
          </p>
          <p>Hereby, I sought to stretch my: {postDetails?.post?.skill}</p>
          <div>
            <Link to={`/interests/${postDetails?.post?.id}/edit`}>
              <button className="post-details-edit">Edit</button>
            </Link>
            <button className="post-details-delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className="post-detail-bottom-container">
        <div className="comments-container">
              <label htmlFor="comment-category">Category: </label>
              <select
                name="category"
                id="comment-category"
                value={comment.category}
                onChange={handleDateAndMealChange}
              >
                <option value="Appreciation">Appreciation</option>
                <option value="Impression">Impression</option>
                <option value="Growth">Growth</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Discussion">Discussion</option>
              </select>
            <button type="submit">Reflect and share</button>
          <h3>Past Feedings</h3>
          <CommentBox comments={postComments} />
        </div>
      </div>
    </div>
  );
}

export default PostDetails;