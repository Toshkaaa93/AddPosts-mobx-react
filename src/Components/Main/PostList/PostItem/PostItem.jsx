import { motion } from "framer-motion"
import postStore from "../../../store/post-store"
import {observer} from 'mobx-react-lite'
const {Link} = require('react-router-dom')


const animation = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const PostItem = observer(({id,index,header,content,image,tags}) => {
    
    const deleteHandler = () => postStore.deletePost(id);

    return (
      <motion.div variants={animation} initial='start' animate='end' className="col">
        <div className="card m-2 text-center">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{index +1}. {header}</h5>
            <p className="card-text">
              {content}
            </p>
            <p className="card-text">
              <small>#{tags}</small>
            </p>
            <button onClick={deleteHandler} type="button" className="btn btn-primary">Удалить пост</button>
            <button type="button" className="btn btn-info ms-1"><Link style={{color:'white',textDecoration:'none'}} to={`/${id}`}>Детальная страница</Link></button>
          </div>
        </div>
      </motion.div>
    );
})

export default PostItem