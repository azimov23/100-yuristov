import "./Modal.css";

function Modal() {
  return (
    <div className="modal">
      <div className="before">
        <img className="modal-img" src="./modal-img.png" alt="" />
        <svg
          className="close-btn"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 10.5857L16.243 6.34274C16.6335 5.95228 17.2665 5.95228 17.657 6.34274C18.0475 6.73321 18.0475 7.36628 17.657 7.75674L13.414 11.9997L17.657 16.2427C18.0475 16.6332 18.0475 17.2663 17.657 17.6567C17.2665 18.0472 16.6335 18.0472 16.243 17.6567L12 13.4137L7.75699 17.6567C7.36652 18.0472 6.73345 18.0472 6.34299 17.6567C5.95252 17.2663 5.95252 16.6332 6.34299 16.2427L10.586 11.9997L6.34299 7.75674C5.95252 7.36628 5.95252 6.73321 6.34299 6.34274C6.73345 5.95228 7.36652 5.95228 7.75699 6.34274L12 10.5857Z"
            fill="#33836E"
          />
        </svg>
        <div className="info">
          <h2 className="title">
            Бесплатная юридическая <br /> консультация по телефону
          </h2>
          <div className="online-users">
            <img src="./online-users.svg" alt="" />
            <p>64 юриста сейчас онлайн</p>
          </div>
          <form className="form">
            <div className="user">
              <p>Номер телефона</p>
              <input
                type="number"
                className="user-tell"
                placeholder="+7 963 335-87-52"
              />
            </div>
            <div className="user">
              <p>Ваше имя</p>
              <input
                type="text"
                className="user-name"
                placeholder="(Александр)"
              />
            </div>
            <button className="submit">Отправить</button>
          </form>
          <p className="info-text">
            s Отправляя вопрос, вы соглашаетесь c условиями Пользовательского
            соглашения
          </p>
        </div>
      </div>
      <div className="after"></div>
    </div>
  );
}

export default Modal;
