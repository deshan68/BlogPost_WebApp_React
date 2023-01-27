import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Posts from "./Posts";

export default function AddPostsRoutes({
  postTitile,
  setPostTitle,
  postDescription,
  setPostDescription,
  handleSubmit,
  handledelete,
  handleEdit,
}) {
  const location = useLocation();
  const postId = location;

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Posts
              postTitile={postTitile}
              setPostTitle={setPostTitle}
              postDescription={postDescription}
              setPostDescription={setPostDescription}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path=":id"
          element={
            <Posts
              postTitile={postTitile}
              postDescription={postDescription}
              setPostTitle={setPostTitle}
              setPostDescription={setPostDescription}
              handledelete={handledelete}
              handleEdit={handleEdit}
              postId={postId}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </>
  );
}
