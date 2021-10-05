import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

import './Header.module..css'

const Header = ({
                    handleShowPopup,
                    handleShowMenu
                }) => {

    const history = useHistory()

    const myUserId = useSelector((state) => state.loggedInUser.value)
    const currentUser = useSelector((state) => state.currentUser.value)

    const handleBackOnPage = () => {
        history.goBack()
    }
    return (
        <header className='header'>
            {
                history.location.pathname === `/${myUserId}` &&
                <>
                    <div className="header__content">
                        <p className="header__id_profile">{currentUser._id}</p>
                        <div className="header__button_wrapper">
                            <button className="header__button header__button_add_card"
                                    onClick={handleShowPopup}
                            />
                            <button className="header__button header__button_menu"
                                    onClick={handleShowMenu}
                            />
                        </div>
                    </div>
                </>
            }

            {
                history.location.pathname !== `/${myUserId}` &&
                <div className="header__publications_wrapper">

                    {
                        history.location.pathname === currentUser.userId &&
                        `/${myUserId}` !== currentUser.userId &&
                        <>
                            <p className="header__subscribers_id_profile">{currentUser._id}</p>
                            <button className="header__subscribers_button"
                                    onClick={handleBackOnPage}
                            />
                        </>
                    }

                    {
                        history.location.pathname === '/subscribers' &&
                        <>
                            <p className="header__subscribers_title">Подписчики</p>
                            <button className="header__subscribers_button"
                                    onClick={handleBackOnPage}
                            />
                        </>
                    }

                    {
                        history.location.pathname === '/publications' &&
                        <>
                            <p className="header__publications_id_profile">{currentUser._id}</p>
                            <h1 className="header__publications_title">Публикации</h1>
                            <button className="header__publications_button"
                                    onClick={handleBackOnPage}
                            />
                        </>
                    }
                </div>

            }
        </header>
    );
}
export default Header