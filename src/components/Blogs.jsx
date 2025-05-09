import React from "react";

export default function Blogs(props) {
  return (
    <div className="blogs">
      {props.data.map((value, index) => (
        <div className="content" key={index}>
          {value.img && (
            <img src={value.img} alt={value.title} className="blog-image" />
          )}
          <h1>{value.title}</h1>
          <p>{value.content}</p>
          <p>{value.writerName}</p>
          <footer>
            <p>{props.date}</p>
            <p>{props.time}</p>
          </footer>
          <button onClick={() => props.deleteBlog(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
