import React from "react";

export default function Button({
  type,
  handledelete,
  id,
  handleEdit,
  postState,
  handleSubmit,
  postId,
}) {
  return (
    <button
      onClick={
        type === "delete"
          ? () => handledelete(id, postState)
          : type === "edit"
          ? () => handleEdit(id, postState)
          : type === "submit"
          ? () => handleSubmit(postId)
          : null
      }
      className={type === "delete" ? "deleteBtn" : "editBtn"}
      type={type}
    >
      {type.toUpperCase()}
    </button>
  );
}
