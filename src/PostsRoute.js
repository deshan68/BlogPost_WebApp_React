import React from "react";
import { Route, Routes } from "react-router-dom";
import PostItem from "./PostItem";
import Posts from "./Posts";
import SinglePostItem from "./SinglePostItem";

export default function PostsRoute({ handledelete, handleEdit }) {
  return (
    <>
      <Routes>
        <Route index element={<Posts />} />
        <Route
          path=":id"
          element={
            <SinglePostItem
              handledelete={handledelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  );
}
