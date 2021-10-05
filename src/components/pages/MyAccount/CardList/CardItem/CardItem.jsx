import "./CardItem.css"

const CardItem = ({card, onOpenCard}) => {

    const handleOpenImage = () => {
        onOpenCard(`/publications`)
    }
    return (
        <li className="photo_cards__item_list">
            <img className="photo_cards__item_image"
                 alt="Изображение"
                 src={card.link}
                 onClick={handleOpenImage}
            />
        </li>
    )
}

export default CardItem