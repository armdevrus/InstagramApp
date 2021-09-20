import './Header.module..css'

const Header = () => {
    return(
        <header className='header'>
            <div className="header__content">
                <p className="header__id_profile">info327</p>
                <div className="header__button_wrapper">
                    <button className="header__button header__button_add_card"/>
                    <button className="header__button header__button_menu"/>
                </div>
            </div>
        </header>
    )
}

export default Header