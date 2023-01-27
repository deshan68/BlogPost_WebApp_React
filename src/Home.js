import React from "react";
import PostItem from "./PostItem";

export default function Home({ posts, handledelete }) {
  return (
    <main>
      {posts.length != 0 ? (
        <>
          {posts.map((postItem) => (
            <PostItem
              handledelete={handledelete}
              key={postItem.id}
              postItem={postItem}
            />
          ))}
        </>
      ) : (
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Any posts
        </h2>
      )}
    </main>
  );
}
