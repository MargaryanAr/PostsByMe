import { useDispatch } from "react-redux";
import PostChangeAll from "../PostChangeAll/PostChangeAll";
import "./Post.css";
import { memo, useState } from "react";
import { deletePost } from "../../stroe/slices/posts/postsAPI";

function Post({ body, img, title, id }) {
  const [changePages, setChangePages] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="post">
        <h2>{title}</h2>
        <img src={img} alt="" />
        <p>{body}</p>

        <div className="btns">
          {changePages === "changeAll" ? (
            <PostChangeAll id={id} setChangePages={setChangePages} />
          ) : null}
          <button onClick={() => setChangePages("changeAll")}>
            Change
          </button>
          <button onClick={() => dispatch(deletePost(id))}>delete</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default memo(Post);
