import { useState } from "react";
import PostItem from "./PostItem/PostItem";
import Footer from "../../Footer/Footer";
import postStore from "../../store/post-store";
import { observer } from "mobx-react-lite";

const PostList = observer(() => {

  let {posts} = postStore;
  const [searchInput, setSearchInput] = useState("");
  const filterPost = posts.filter((post) => {
    return post.header.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="поиск по постам"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </form>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filterPost.map((post, index) => (
          <PostItem
            key={post.id}
            index={index}
            {...post}
          />
        ))}
      </div>
      {!filterPost.length ? (
        <div className="mt-3 text-center">
          <p>В данный момент ваша лента пуста...</p>
        </div>
      ) : (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
});

export default PostList;
