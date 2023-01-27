import React from "react";
import { NavLink } from "react-router-dom";

export default function PostItem({ postItem }) {
  return (
    <>
      <NavLink
        state={postItem}
        to={`/posts/${postItem.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <main className="postContainer">
          <div className="title">{postItem.title}</div>
          <div className="description">{postItem.description}</div>
        </main>
      </NavLink>
    </>
  );
}
