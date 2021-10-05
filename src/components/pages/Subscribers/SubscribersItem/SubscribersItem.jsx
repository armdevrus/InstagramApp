import {useHistory} from "react-router-dom";
import './SubscribersItem.css'

const SubscribersItem = ({id, userData}) => {

    const history = useHistory();

    const handleTransitionAnotherProfile = () => {
        history.push(`/${id}`)
    }

    return(
            <li className="subscribers__item_list" onClick={handleTransitionAnotherProfile}>
                <div className="subscribers__user_wrapper">
                    <img className="subscribers__user_avatar"
                         alt="Аватар пользователя"
                         src={userData.avatar}
                    />
                </div>
                <p className="subscribers__user_name">{userData.name}</p>
            </li>
    )
}

export default SubscribersItem