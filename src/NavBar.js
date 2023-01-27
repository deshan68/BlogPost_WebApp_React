import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <input type={"text"} placeholder={"Search Posts"} />
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return isActive ? {} : { color: "gray", textDecoration: "none" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/addposts"}
            style={({ isActive }) => {
              return isActive ? {} : { color: "gray", textDecoration: "none" };
            }}
          >
            Add Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            style={({ isActive }) => {
              return isActive ? {} : { color: "gray", textDecoration: "none" };
            }}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
