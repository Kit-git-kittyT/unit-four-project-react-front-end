import React from "react";

function CommentBox({ comment }) {
  const commentCategory = {
    A: "Appreciation",
    I: "Impression",
    G: "Growth",
    S: "Suggestion",
    D: "Discussion",
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Comment Category</th>
        </tr>
      </thead>
      <tbody>
        {!comments.length ? null : comments.map((comment, index) => (
          <tr key={index}>
            <td>{commentCategory[comment.category]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CommentBox;