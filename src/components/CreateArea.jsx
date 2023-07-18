import React, { useState } from "react";
// import {AddIcon} from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleclick(event) {
    props.onadd(note);
    event.preventDefault();
    setnote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handlechange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handlechange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleclick}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
