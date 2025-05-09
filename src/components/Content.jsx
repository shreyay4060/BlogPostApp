import React from "react";

export default function Content(props) {
  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          onChange={props.handleChange}
          name="title"
          placeholder="Title"
          value={props.item.title}
        />
        <br />
        {/* Input for file upload */}
        <input
          type="file"
          onChange={props.handleFileChange}
          name="img"
          accept="image/*"
        />
        <br />
        <textarea
          name="content"
          onChange={props.handleChange}
          id="content"
          cols="30"
          rows="10"
          value={props.item.content}
        />
        <br />
        <input
          type="text"
          onChange={props.handleChange}
          name="writerName"
          placeholder="Enter your name"
          value={props.item.writerName}
        />
        <br />
        <button onClick={props.handleClick}>Submit</button>
      </div>
    </div>
  );
}
