import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

class PostStore {
  posts = [];
  open = false;
  LSPostsKey = 'posts'

  constructor() {
    makeAutoObservable(this);
  }

  createPost(header, content, image, tags) {
    const newPost = {
      id: nanoid(),
      header,
      content,
      image,
      tags,
    };
    this.posts = [...this.posts, newPost];
  }

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  clearAllPosts() {
    this.posts = [];
  }

  openModal() {
    this.open = true
  }

  closeModal() {
    this.open = false
  }
}

export default PostStore = new PostStore()
