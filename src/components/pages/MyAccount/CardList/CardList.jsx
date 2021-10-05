import "./CardList.css"
import CardItem from "./CardItem/CardItem";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const CardList = ({userProfile}) => {

    const currentUser = useSelector((state) => state.currentUser.value)

    const history = useHistory()

    const handleOpenCard = (url) => {
        history.push(url);
    }

    return (
        <section className="photo_cards">
            <ul className="photo_cards__unordered_list">
                {currentUser.cards.map((item)=>
                    <CardItem
                        key={item._id}
                        card={item}
                        onOpenCard={handleOpenCard}
                    />
                )}
            </ul>
        </section>
    )
}

export default CardList