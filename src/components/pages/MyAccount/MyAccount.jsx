import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    addCurrentDataUser,
    addCurrentUserId,
    addNewCard
} from "../../../features/currentUser/currentUserSlice";
import {useHistory} from "react-router-dom";

import Header from "../../../common/Header/Header";
import Profile from "../Profile/Profile";
import CardList from "./CardList/CardList";
import * as api from '../../../utils/api'
import Preloader from "../../../common/Preloader/Preloader";
import PopupCreatingCard from "./PopupCreatingCard/PopupCreatingCard";
import Navigation from "./Navigation/Navigation";

const MyAccount = ({
                       isActivePreloader, setIsActivePreloader
                   }) => {

    const history = useHistory()
    const dispatch = useDispatch()

    const userId = history.location.pathname

    const myUserId = useSelector((state) => state.loggedInUser.value)
    const cards = useSelector((state) => state.currentUser.value).cards

    const [isOpenPopupCreateCard, setIsOpenPopupCreateCard] = useState(false)
    const [isOpenMenuNavigation, setIsOpenMenuNavigation ] = useState(false)

    const handleShowPopup = () => {
        setIsOpenPopupCreateCard(!isOpenPopupCreateCard)
        document.body.classList.toggle('page_lock');
    }

    const handleShowMenu = () => {
        setIsOpenMenuNavigation(!isOpenMenuNavigation)
        document.body.classList.toggle('page_lock');
    }

    const handleGetDataUser = async (userId) => {
        setIsActivePreloader(true)
        const userProfile = await api.getUserProfile(userId)
        dispatch(addCurrentDataUser(userProfile))
        dispatch(addCurrentUserId(userId))
        setIsActivePreloader(false)
    }

    const handleAddCard = async ({
                                     link,
                                     textLocation,
                                     textDescription
                                 }) => {
        const newCard = await api.addCard(
            link,
            textLocation,
            textDescription,
            cards,
            myUserId
        );
        dispatch(addNewCard(newCard))
        handleShowPopup()
    }

    useEffect(() => {
        if (userId !== '') {
            handleGetDataUser(userId);
        }
    }, [userId])

    return (
        <>
            {
                isActivePreloader ?
                    <Preloader/> :
                    <>
                        <Header
                            handleShowPopup={handleShowPopup}
                            handleShowMenu={handleShowMenu}
                        />
                        <Profile/>
                        <CardList/>
                        <Navigation
                            handleShowMenu={handleShowMenu}
                            isOpenMenuNavigation={isOpenMenuNavigation}
                        />
                        <PopupCreatingCard
                            handleAddCard={handleAddCard}
                            isOpenPopupCreateCard={isOpenPopupCreateCard}
                            handleShowPopup={handleShowPopup}
                        />
                    </>
            }
        </>
    )
}
export default MyAccount