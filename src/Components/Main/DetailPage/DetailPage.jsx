import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../Modal/Modal";
import ModalInput from "../../Modal/ModalInput/ModalInput";
import { motion } from "framer-motion";
import postStore from "../../store/post-store";
import { observer } from "mobx-react-lite";

const animation = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const DetailPage = observer(() => {
  const { posts } = postStore;
  const { id } = useParams();
  const navigate = useNavigate();
  const dataForPost = posts.find((post) => post.id === id);

  return (
    <>
      <motion.div
        variants={animation}
        initial="start"
        animate="end"
        className="d-flex justify-content-center mt-3 mb-3"
      >
        <div className="card">
          <img
            src={dataForPost.image}
            className="card-img-top shadow-lg mb-5"
            style={{ width: "45rem" }}
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title">{dataForPost.header}</h5>
            <p className="card-text">{dataForPost.content}</p>
            <p>#{dataForPost.tags} </p>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-primary mx-1"
            >
              Назад
            </button>
            <button
              type="button"
              onClick={()=>postStore.openModal()}
              className="btn btn-success mx-1"
            >
              Редактировать
            </button>
          </div>
        </div>
      </motion.div>

      <Modal closeModal={()=>postStore.closeModal()}>
        <ModalInput createSubmit={() => {}} {...dataForPost} />
      </Modal>
    </>
  );
});
export default DetailPage;
