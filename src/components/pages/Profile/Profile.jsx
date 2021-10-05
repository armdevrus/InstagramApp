import './Profile.css'
import {useHistory} from "react-router-dom";

import {useSelector} from "react-redux";

const Profile = () => {

    const currentUser = useSelector((state) => state.currentUser.value)

    const history = useHistory()

    const handleTransitionOnClickSubscribers = () => {
        history.push('/subscribers')
    }

    return (
        <section className="profile">
            <div className="profile__wrapper">
                <div className="profile__wrapper_image">
                    <img src={currentUser.avatar}
                         alt="Аватар пользователя" className="profile__avatar"/>
                </div>
                <div className="profile__public_info">
                    <ul className="profile__unordered_list">
                        <li className="profile__item_list">
                             <h2 className="profile__item_number">16</h2>
                           <p className="profile__item_subtitle">Публикация</p>
                        </li>
                        <li className="profile__item_list" onClick={handleTransitionOnClickSubscribers}>
                             <h2 className="profile__item_number">107</h2>
                           <p className="profile__item_subtitle">Подписчики</p>
                        </li>
                        <li className="profile__item_list">
                             <h2 className="profile__item_number">200</h2>
                           <p className="profile__item_subtitle">Подписки</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__signature">Москва</p>
            </div>
            <button className="profile__button_edit">Редактировать</button>
        </section>
    )
}
export default Profile