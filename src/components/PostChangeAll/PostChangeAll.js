import "./PostChangeAll.css";

import { memo, useRef, useState } from "react";
import { convertImgToBase64 } from "../../helpers/convertorFunctions";
import { useDispatch, useSelector } from "react-redux";
import { changePost } from "../../stroe/slices/posts/postsAPI";
import { selectPosts } from "../../stroe/slices/posts/postsSlice";

function PostChangeAll({ id, setChangePages }) {
  const formRef = useRef(null);
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const [currentValue, setCurrentValue] = useState(posts.filter(post => post.id === id))


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(currentValue);

    const [{ value: title }, { files: [file] }, { value: body }] = formRef.current;
    const img = file ? await convertImgToBase64(file) : currentValue.img;

    const newPost = {
      id,
      title: title.trim() || currentValue.title,
      img,
      body: body.trim() || currentValue.body
    }

    setCurrentValue(newPost)
    dispatch(changePost( newPost ))


    setChangePages("");

    formRef.current.reset();
  };

  return (
    <div className="postChangeAll">
      <p onClick={() => setChangePages("")}>X</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input placeholder="Change Title" />
        <div className="upload-file__wrapper">
          <input
            type="file"
            name="files[]"
            id="upload-file__input_1"
            className="upload-file__input"
            accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip"
            multiple
          />
          <label className="upload-file__label" htmlFor="upload-file__input_1">
            <svg
              className="upload-file__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"></path>
            </svg>
            <span className="upload-file__text">Прикрепить файл</span>
          </label>
        </div>
        <input placeholder="Change Body" />
        <button>Change</button>
      </form>
    </div>
  );
}

export default memo(PostChangeAll);


