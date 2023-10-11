import {observer} from 'mobx-react-lite'
import postStore from '../store/post-store';


const Footer = observer(() => {
  const deleteAll = () => {
    postStore.clearAllPosts()
  };

  return (
    <button onClick={deleteAll} type="button" className="btn btn-danger mt-5 mb-2">
      Удалить все посты
    </button>
  );
});

export default Footer;
