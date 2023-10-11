import { useState } from "react"
import { useParams } from "react-router-dom"
import postStore from "../../store/post-store"
import {observer} from 'mobx-react-lite'


const ModalInput = observer (({header='', image='', content='', tags=''}) => {

  const [title, setTitle] = useState(header)
  const [pic, setPic] = useState(image)
  const [word, setWord] = useState(content)
  const [tag, setTag] = useState(tags)
  const { posts } = postStore
  const { id } = useParams()
  const { LSPostsKey } = postStore

  const indexPost = postStore.posts.findIndex((post) => post.id === id)


  posts[indexPost].image = pic
  posts[indexPost].header = title
  posts[indexPost].content = word
  posts[indexPost].tags = tag

  const changeTitle = (e) => setTitle(e.target.value)
  const changePic = (e) => setPic(e.target.value)
  const changeWord = (e) => setWord(e.target.value)
  const changeTag = (e) => setTag(e.target.value)

  const createSubmit = (e) => {
    e.preventDefault()

    const wordTrim = word.trim()
    const titleTrim = title.trim()
    const picTrim = pic.trim()
    const tagTrim = tag.trim()
    if (wordTrim && titleTrim && picTrim && tagTrim) {

      setTitle(title)
      setPic(pic)
      setWord(word)
      setTag(tag)
    }

    localStorage.setItem(LSPostsKey, JSON.stringify(posts))
    postStore.closeModal()
  };



  return (
    <form onSubmit={createSubmit} className="d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Заголовок поста"
          value={title}
          onChange={changeTitle}
        />
        <input
          type="text"
          className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ссылка на картинку"
          value={pic}
          onChange={changePic}
        />
        <input
          type="text"
          className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Текст поста"
          value={word}
          onChange={changeWord}
        />
        <input
          type="text"
          className="form-control bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Добавить свой тег"
          value={tag}
          onChange={changeTag}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Редактировать пост
        </button>
    </form>
  )

})

export default ModalInput