import styles from './modal.module.css'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import postStore from '../store/post-store'

const modalAnimation = {
  start: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
  end: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const Modal = observer(({children,...rest}) => {
 const {open} = postStore

    return ReactDOM.createPortal(
      <AnimatePresence>
        {open && <ModalInner {...rest}>{children}</ModalInner>}
        </AnimatePresence>,
        document.getElementById('modal-root'),//ссылка на контейнер
    )
})

export default Modal

const ModalInner = observer(({children}) =>{
    const escHandler = (e) => {
        if(e.code === 'Escape') {
            postStore.closeModal()
        }
    }

    useEffect(() => {
        window.document.addEventListener('keydown', escHandler)
    
        return () => {
          window.document.removeEventListener('keydown', escHandler)
        }
      }, [])

      const closeClickHandler = () => {
        postStore.closeModal()
      }
    
      
      const innerClickHandler = (e) => {
        e.stopPropagation()//отменяет всплытие события(закрытие по клику на все элементы внутри формы)
      }

      return (
        <motion.div variants={modalAnimation} initial='start' animate='show' exit='end' onClick={closeClickHandler} className={styles.wrapper}>
          <div onClick={innerClickHandler} className={styles.inner}>
          <svg onClick={closeClickHandler} role="button" className={`bi bi-x-lg ${styles.icon}`}  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
            {children}
          </div>
        </motion.div>
      )
})