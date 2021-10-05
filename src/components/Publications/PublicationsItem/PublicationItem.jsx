import {useSelector, useDispatch} from "react-redux";
import * as api from './../../../utils/api'

import './PublicationItem.css'
import {updateLikeOfCard} from "../../../features/currentUser/currentUserSlice";

const PublicationsItem = ({card}) => {

    const dispatch = useDispatch()

    const currentUser = useSelector((state) => state.currentUser.value)

    const handleLikeChange = async () => {
        await api.updateNumbersOfLikes(card, currentUser.userId, card.likes + 1)
        dispatch(updateLikeOfCard(card))
    }

    return(
        <li className="publications__item-list">
            <div className="publications__wrapper_top">
                <div className="publications__wrapper_image">
                    <img src={currentUser.avatar}
                         alt="Изображение аватара"
                         className="publications__avatar_image"
                    />
                </div>
                <div className="publications__wrapper_text">
                    <p className="publications__id_profile">{currentUser._id}</p>
                    <a href="#123" className="publications__link_location">Москва</a>
                </div>
                <button className="publications__button_action_menu "/>
            </div>
            <img src={card.link}
                 alt="Изображение"
                 className="publications__item_image"/>
            <div className="publications__wrapper_bottom">
                <div className="publications__wrapper_button">
                    <div className="publications__wrapper_left_button">
                        <button className="publications__button publications__button_like" onClick={handleLikeChange}/>
                        <button className="publications__button publications__button_comment"/>
                        <button className="publications__button publications__button_send"/>
                    </div>
                    <p className="publications__likes">Нравится <span className="publications__likes_number">{card.likes}</span></p>
                </div>
                <button className="publications__button publications__button_notes"/>
            </div>
        </li>
    )
}
export default PublicationsItem