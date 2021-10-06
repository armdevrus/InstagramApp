import {useHistory} from "react-router-dom";
import {persistor} from "../../../../store/store";

import './Navigation.css'

import pathGearIcon from '../../../../images/icon/icon-gear.svg'
import pathArchiveIcon from '../../../../images/icon/icon-archive.svg'
import pathClockIcon from '../../../../images/icon/icon-clock.svg'
import pathQrCodeIcon from '../../../../images/icon/icon-qr-code.svg'
import pathNotesIcon from '../../../../images/icon/icon-save.svg'
import pathListIcon from '../../../../images/icon/icon-list.svg'
import pathCertificateIcon from '../../../../images/icon/icon-certificate.svg'
import * as api from '../../../../utils/api'

const Navigation = ({
                        isOpenMenuNavigation,
                        handleShowMenu
                    }) => {

    const history = useHistory()

    const handleSignOut = () => {
        document.body.classList.remove('page_lock');
        persistor.purge()
        api.signOut()
        history.push('/signin')
    }
    return (
        <div className={`navigation ${isOpenMenuNavigation ? 'navigation_active' : ''}`} onClick={handleShowMenu}>
            <nav className={`navigation__menu ${isOpenMenuNavigation ? 'navigation__menu_active' : ''}`}
                 onClick={event => event.stopPropagation()}>
                <ul className="navigation__menu_unordered_list">
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка настроек"
                            src={pathGearIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">Настройки</a>
                    </li>
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка архива"
                            src={pathArchiveIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">Архив</a>
                    </li>
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка часов"
                            src={pathClockIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">Ваши действия</a>
                    </li>
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка QR-кода"
                            src={pathQrCodeIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">QR-код</a>
                    </li>
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка заметок"
                            src={pathNotesIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">Сохраненные</a>
                    </li>
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка списка"
                            src={pathListIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">Близкие друзья</a>
                    </li>
                    <li className="navigation__menu_list_item">
                        <img
                            className="navigation__menu_icon_item"
                            alt="Иконка серитификата"
                            src={pathCertificateIcon}
                        />
                        <a className="navigation__menu_link_item" href="#q">Центр информации о COVID-19</a>
                    </li>
                    <button className="navigation__button"
                            onClick={handleSignOut}>
                        Выйти из аккаунта
                    </button>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation