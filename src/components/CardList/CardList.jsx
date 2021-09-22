import "./CardList.css"
import CardItem from "../CardItem/CardItem";

const CardList = ({
    cards
                  }) => {
    return (
        <section className="photo_cards">
            <ul className="photo_cards__unordered_list">
                {cards.map((item)=>
                    <CardItem
                        key={item._id}
                        card={item}
                    />
                )}
            </ul>
        </section>
    )
}

export default CardList