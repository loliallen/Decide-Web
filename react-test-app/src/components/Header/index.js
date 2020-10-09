import React from 'react'

import './style.css'

class Header extends React.Component {

    render() {
        return <header className="header_nav">
            <nav className="header__nav">
                <div className="nav_item nav_item__title">Название</div>
                <div className="nav_item">О себе</div>
                <div className="nav_item">Контакты</div>
                <div className="nav_item">Войти</div>
            </nav>
        </header>
    }
}

export default Header;