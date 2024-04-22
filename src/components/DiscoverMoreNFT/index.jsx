import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './style.module.css';
import ClearIcon from '@mui/icons-material/Clear';

const NFTcards = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState();
  const [open, setOpen] = useState(false);
  const imgRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const salesRef = useRef();

  useEffect(() => {
    axios.get('http://localhost:8000/DiscoverMoreNFT')
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);


  const handleEdit = (task) => {
    setTaskToEdit(task);
    setOpen(true);
  };

  const handleSubmitEdit = () => {
    if (imgRef.current.value && titleRef.current.value && descRef.current.value && priceRef.current.value && salesRef.current.value && taskToEdit) {
      const body = {
        NFTImage: imgRef.current.value,
        NFTTitle: titleRef.current.value,
        iconName: descRef.current.value,
        price: priceRef.current.value,
        highest: salesRef.current.value
      };
      axios.put(`http://localhost:8000/DiscoverMoreNFT/${taskToEdit.id}`, body)
        .then(res => {
          const updatedTasks = tasks.map(item => (item.id === taskToEdit.id ? res.data : item));
          setTasks(updatedTasks);
          setOpen(false);
        })

    } else {
      alert(`Please fill in all fields`);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/DiscoverMoreNFT/${id}`)
      .then(() => {
        const updatedTasks = tasks.filter(item => item.id !== id);
        setTasks(updatedTasks);
        setOpen(false);
      })
  };

  return (
    <>
      <div className={Styles.section}>
        <div className={Styles.container}>
          <div className={Styles.card}>
            <form className={Styles.form}>
              <div className={Styles.card__modal}>
                <input className={Styles.input__top} ref={imgRef} type='url' placeholder='Rasm' />
                <input className={Styles.input__top} ref={titleRef} type='text' placeholder='Title' />
              </div>
              <div className={Styles.card__modal}>
                <input className={Styles.input__top} ref={descRef} type='text' placeholder='Description' />
                <input className={Styles.input__top} ref={salesRef} type='number' placeholder='Sales' />
              </div>
              <button className={Styles.card__modal__button}>Qo'shish</button>
            </form>
          </div>
          {tasks.map((task, index) => (
            <div key={index} className={Styles.card}>
              <img className={Styles.img} src={task.NFTImage} alt="" />
              <div key={index} className={Styles.card__left}>
                <div className={Styles.card__left__item}>
                  <h2 className={Styles.card__h2}>{task.NFTTitle}</h2>
                </div>
                <div className={Styles.card__left__item}>
                  <h2 className={Styles.h2}>{task.iconName}</h2>
                </div>
              </div>
              <div className={Styles.card__item}>
                <div className={Styles.card__left__item}>
                  <h2 className={Styles.h2}>Price</h2>
                </div>
                <div className={Styles.card__left__item}>
                  <p className={Styles.card__p}>{task.price}</p>
                </div>
                <div className={Styles.card__left__item}>
                  <span className={Styles.card__span}>{task.highest}</span>
                </div>
              </div>
              <div className={Styles.card__right}>
                <button className={Styles.card__button} onClick={() => handleEdit(task)}>Edit</button>
                <button className={Styles.card__button} onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {open && (
          <>
            <div className={Styles.modal}>
              <div className={Styles.modal__item}>
                <ClearIcon className={Styles.icon} onClick={() => setOpen(false)} />
              </div>
              <form>
                <input className={Styles.input} ref={imgRef} type='url' required defaultValue={taskToEdit.NFTImage} placeholder='Rasm' />
                <input className={Styles.input} ref={titleRef} type='text' required defaultValue={taskToEdit.NFTTitle} placeholder='Title' />
                <input className={Styles.input} ref={descRef} type='text' required defaultValue={taskToEdit.iconName} placeholder='Description' />
                <input className={Styles.input} ref={priceRef} type='number' required defaultValue={taskToEdit.price} placeholder='Price' />
                <input className={Styles.input} ref={salesRef} type='number' required defaultValue={taskToEdit.highest} placeholder='Sales' />
                <button className={Styles.modal__button} onClick={handleSubmitEdit}>Saqlash</button>
              </form>
            </div>
            <div className={Styles.overlay} onClick={() => setOpen(false)} />
          </>
        )}
      </div>
    </>
  );
};

export default NFTcards;
