import './Profile.css'

const Profile = () => {
    return (
        <section className="profile">
            <div className="profile__wrapper">
                <div className="profile__wrapper_image">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                         alt="Аватар пользователя" className="profile__avatar"/>
                </div>
                <div className="profile__public_info">
                    <ul className="profile__unordered_list">
                        <li className="profile__item_list">
                             <h2 className="profile__item_number">16</h2>
                           <p className="profile__item_subtitle">Публикация</p>
                        </li>
                        <li className="profile__item_list">
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
                <h1 className="profile__name">Вася</h1>
                <p className="profile__signature">Москва</p>
            </div>
            <button className="profile__button_edit">Редактировать</button>
        </section>
    )
}
export default Profile