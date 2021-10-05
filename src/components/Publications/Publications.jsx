import {useSelector} from "react-redux";

import PublicationItem from "./PublicationsItem/PublicationItem";
import Header from "../../common/Header/Header";
import './Publications.css'

const Publications = () => {

    const currentUser = useSelector((state) => state.currentUser.value)

    return(
        <>
            <Header />
            <section className="publications">
                <ul className="publications_unordered_list">
                    {currentUser.cards.map((item) =>
                        <PublicationItem
                            key={item._id}
                            card={item}
                        />
                    )}
                </ul>
            </section>
        </>

    )
}

export default Publications;