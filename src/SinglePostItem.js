import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

export default function SinglePostItem({ handledelete, handleEdit }) {
  const location = useLocation();
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <div style={{ fontSize: "30px", fontWeight: "bold" }}>
        {location.state.title}
      </div>
      <div style={{ fontSize: "20px", fontWeight: "400" }}>
        {location.state.description}
      </div>
      <NavLink to={`/addposts/${location.state.id}`} state={location}>
        <Button
          type={"edit"}
          handleEdit={handleEdit}
          id={location.state.id}
          postState={location.state}
        />
      </NavLink>
      <Button
        type={"delete"}
        handledelete={handledelete}
        id={location.state.id}
      />
    </main>
  );
}
