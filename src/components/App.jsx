import React, { useState } from "react";
import Blogs from "./Blogs.jsx";
import Content from "./Content";

function App() {
  const [item, setItem] = useState({
    title: "",
    img: null, // Store the image file
    content: "",
    writerName: "",
  });

  const [data, setData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle file upload
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setItem((prev) => ({
        ...prev,
        img: URL.createObjectURL(file), // Create a temporary URL for the uploaded image
      }));
    }
  }

  function handleClick() {
    setData((prev) => [...prev, item]);
    setItem({
      title: "",
      img: null,
      content: "",
      writerName: "",
    });
  }

  function deleteBlog(id) {
    setData((prev) => prev.filter((_, index) => index !== id));
  }

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <div className="navbar">
        <h1>My Blog App</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <Content
        handleChange={handleChange}
        item={item}
        handleClick={handleClick}
        handleFileChange={handleFileChange}
      />

      <br />

      <Blogs data={data} date={date} time={time} deleteBlog={deleteBlog} />
    </>
  );
}

export default App;
