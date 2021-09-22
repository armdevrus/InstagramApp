import {useState, useEffect} from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import CardList from "../CardList/CardList";
import {
    getAllCards
} from "../../api/api";

const MyAccount = ({
                       userId
                   }) => {

    const [cards, setCards] = useState([]);

    const handleGetAllCards = async (userId) => {
        const allCards = await getAllCards(userId)
        setCards(allCards)
    }

    console.log(cards)
    useEffect(()=> {
        if(userId !==''){
            handleGetAllCards(userId)
        }
    },[userId])

    return (
        <>
            <Header/>
            <Profile/>
            <CardList cards={cards}/>
        </>
    )
}
export default MyAccount