import "./CarItem.css"

const CardItem = ({
    card
                  }) => {
    return(
        <li className="photo_cards__item_list">
            <img className="photo_cards__item_image"
                 alt="Изображение"
                 src={card.link}/>
        </li>
    )
}

export default CardItem