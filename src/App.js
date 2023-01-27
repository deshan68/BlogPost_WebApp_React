import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import PostsRoute from "./PostsRoute";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";
import AddPostsRoutes from "./AddPostsRoutes";

function App() {
  const API_URL = "http://localhost:3500/posts";
  const [posts, setPosts] = useState([]);
  const [postTitile, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const postItem = await response.json();
        setPosts(postItem);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (postTitile, postDescription) => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const myNewPost = { id, title: postTitile, description: postDescription };
    const postItems = [...posts, myNewPost];
    setPosts(postItems);

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewPost),
    };
    const result = await apiRequest(API_URL, postOption);
    if (result) {
      console.log(result);
    } else {
      setPostDescription("");
      setPostTitle("");
      navigate("/");
      alert("Data Added Succefully");
    }
  };

  const handledelete = async (id) => {
    const postItems = posts.filter((item) => item.id !== id);
    setPosts(postItems);
    const deletOption = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deletOption);
    if (result) {
      console.log(result);
    } else {
      navigate("/");
      alert("Post Deleted");
    }
  };

  const handleEdit = async (id, postState) => {
    setPostTitle(postState.title);
    setPostDescription(postState.description);
  };

  const handleSubmit = (postId) => {
    if (postId != null) {
      updatePost(postId);
    } else {
      addPost(postTitile, postDescription);
    }
  };

  const updatePost = async (postId) => {
    const postItem = posts.map((item) =>
      item.id === postId
        ? { ...item, title: postTitile, description: postDescription }
        : item
    );
    setPosts(postItem);

    const myPost = postItem.filter((item) => item.id === postId);
    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: myPost[0].title,
        description: myPost[0].description,
      }),
    };
    const reqUrl = `${API_URL}/${postId}`;
    const result = await apiRequest(reqUrl, updateOption);
    if (result) {
      console.log(result);
    } else {
      setPostDescription("");
      setPostTitle("");
      navigate("/");
      alert("Edit Succefully");
    }
  };
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} handledelete={handledelete} />}
        />
        <Route
          path="/posts/*"
          element={
            <PostsRoute handledelete={handledelete} handleEdit={handleEdit} />
          }
        />
        <Route
          path="/addposts/*"
          element={
            <AddPostsRoutes
              postTitile={postTitile}
              setPostTitle={setPostTitle}
              postDescription={postDescription}
              setPostDescription={setPostDescription}
              handleSubmit={handleSubmit}
              handledelete={handledelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
