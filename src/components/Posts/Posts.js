import "./Posts.css";

import { memo, useEffect, useMemo } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import PostCreate from "../PostCreate/PostCreate";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../stroe/slices/posts/postsSlice";
import { fetchPosts } from "../../stroe/slices/posts/postsAPI";

function Posts() {
  const [isShow, setIsShow] = useState(false);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const reversedPosts = useMemo (() => {
    return posts.toReversed()
  }, [posts])


  return (
    <div className="container">
      {!isShow ? (
        <button onClick={() => setIsShow(true)}>Add New Post</button>
      ) : (
        <PostCreate setIsShow={setIsShow} />
      )}
      {reversedPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default memo(Posts);
