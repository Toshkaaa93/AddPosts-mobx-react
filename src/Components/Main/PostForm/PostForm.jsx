import { useState } from "react"
import postStore from "../../store/post-store"
import {observer} from 'mobx-react-lite'

const PostForm = observer(() => {

    const [header,setHeader] = useState('')
    const [content,setContent] = useState('')
    const [image,setImage] = useState('')
    const [tags,setTags] = useState('')


    const changeHeader = (e) => setHeader(e.target.value)
    const changeContent = (e) => setContent(e.target.value)
    const changeImage = (e) => setImage(e.target.value)
    const changeTags = (e) => setTags(e.target.value)

    const submitHandler = (e) => {
        e.preventDefault();
 
        const headerTrim = header.trim();
        const contentTrim = content.trim()
        const imageTrim = image.trim();
        const tagsTrim = tags.trim();

        if(headerTrim && contentTrim && imageTrim && tagsTrim) {
           postStore.createPost(headerTrim, contentTrim, imageTrim, tagsTrim);
           setHeader('');
           setContent('')
           setImage('')
           setTags('')
        }
    }

    return (
      <form onSubmit={submitHandler} className="mt-4 d-flex flex-column align-items-center">
        <div className="mb-3">
          <input
            type="text"
            name="head"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Заголовок поста"
            value={header}
            onChange={changeHeader}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Текст поста"
            value={content}
            onChange={changeContent}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="img"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Ссылка на изображение"
            value={image}
            onChange={changeImage}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="tag"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="тег поста"
            value={tags}
            onChange={changeTags}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить пост
        </button>
      </form>
    );
})

export default PostForm