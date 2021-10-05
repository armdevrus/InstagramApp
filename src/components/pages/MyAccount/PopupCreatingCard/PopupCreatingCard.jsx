import './PopupCreatingCard.css'
import {useState} from "react";

const PopupCreatingCard = ({
                               isOpenPopupCreateCard,
                               handleShowPopup,
                               handleAddCard
                           }) => {

    const [link, setLink] = useState('')
    const [textLocation, setTextLocation] = useState('')
    const [textDescription, setTextDescription] = useState('')

    const handleChangeUrlImage = event => setLink(event.target.value);
    const handleChangeTextLocation = event => setTextLocation(event.target.value);
    const handleChangeTextDescription = event => setTextDescription(event.target.value);

    const handleSubmit = event => {
        event.preventDefault()
        handleAddCard({
            link,
            textLocation,
            textDescription
            })
    }


    return (
        <div className={`popup popup_type_create_card ${isOpenPopupCreateCard ? 'popup_visible' : ''}`}
             onClick={handleShowPopup}
        >
            <div className="popup__content popup__content_type_create_card"
                 onClick={event => event.stopPropagation()}
            >
                <h1 className="popup__title">Добавить новое фото</h1>
                <form className="popup__form popup_form_type_create_card" onSubmit={handleSubmit}>
                    <input
                        type="url"
                        className="popup__input"
                        name="url_image"
                        placeholder="Введите ссылку на карточку"
                        value={link}
                        onChange={handleChangeUrlImage}
                    />
                    <input
                        type="text"
                        className="popup__input"
                        name="text_location"
                        placeholder="Введите место"
                        value={textLocation}
                        onChange={handleChangeTextLocation}
                    />
                    <input
                        type="text"
                        className="popup__input"
                        name="text_description"
                        placeholder="Описание к картинке"
                        value={textDescription}
                        onChange={handleChangeTextDescription}
                    />
                    <button className="popup__button">Добавить</button>
                </form>
            </div>
        </div>
    )
}
export default PopupCreatingCard