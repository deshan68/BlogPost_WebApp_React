import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

export default function Posts({
  postTitile,
  setPostTitle,
  postDescription,
  setPostDescription,
  handleSubmit,
  postId,
}) {
  const location = useLocation();
  if (location.state !== null) postId = location.state.state.id;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>Add Post</h1>
      <input
        required
        style={{ width: "70%", marginBottom: "20px" }}
        type={"text"}
        placeholder="Title"
        value={postTitile}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <textarea
        required
        value={postDescription}
        onChange={(e) => setPostDescription(e.target.value)}
        rows="12"
        cols="90"
        type={"text"}
        placeholder="description"
      />
      <Button postId={postId} handleSubmit={handleSubmit} type="submit" />
    </form>
  );
}
