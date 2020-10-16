import React, { Component } from 'react'

import './style.css'
import yoda_img from "./baby-yoda.jpg"

export default class Card extends Component {
    static defaultProps = {
        header: "Заголовок",
        description: "Описание карточки"
    }

    state = {
        header: this.props.header,
        description: this.props.description
    }

    render() {
        const { header, description } = this.state
        return (
            <div className="card">
                <div className="card__image_container">
                    <img alt="bby" src={yoda_img}></img>
                </div>
                <div className="card__description">
                    <h2>{header}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
