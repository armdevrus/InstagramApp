import {useState, useEffect} from "react";

import SubscribersItem from "./SubscribersItem/SubscribersItem";

import * as api from '../../../utils/api'

import './Subscribers.css'
import Header from "../../../common/Header/Header";
import {useSelector} from "react-redux";

const Subscribers = () => {

    const myUserId = useSelector((state) => state.loggedInUser.value)

    const [otherUsersId, setOtherUsersId] = useState([])
    const [users, setUsers] = useState([])


    const handleGetOtherUsers = async () => {
        const allUsers = await api.getAllUsers();
        setUsers(allUsers);
        setOtherUsersId(Object.keys(allUsers).filter(item => item !== myUserId))
    }

    useEffect(() => {
        handleGetOtherUsers()
    }, [])

    return (
        <>
            <Header/>
            <section className="subscribers">
                <ul className="subscribers__unordered_list">
                    {
                        otherUsersId.map((id, index) =>
                            <SubscribersItem
                                id={id}
                                key={index}
                                userData={users[id]}
                            />
                        )
                    }
                </ul>
            </section>
        </>
    )
}

export default Subscribers