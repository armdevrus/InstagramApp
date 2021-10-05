import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import MyAccount from "./components/pages/MyAccount/MyAccount";
import * as api from './utils/api'
import Publications from "./components/Publications/Publications";
import Subscribers from "./components/pages/Subscribers/Subscribers";
import Login from "./components/pages/Login/Login";

import {addLoggedInUser} from "./features/loggedinUser/loggedInUserSlice";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {

    const [isActivePreloader, setIsActivePreloader] = useState(true)

    const dispatch = useDispatch()

    const history = useHistory()

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        dispatch(addLoggedInUser(userId))
        history.push(`/${userId}`)
    }

    return (
        <Switch>
            <Route path="/signin">
                <Login
                    handleLogin={handleLogin}
                />
            </Route>

            <ProtectedRoute path="/publications" component={Publications}/>
            <ProtectedRoute path="/subscribers" component={Subscribers}/>
            <ProtectedRoute exact path="/:id"
                            component={MyAccount}
                            isActivePreloader={isActivePreloader}
                            setIsActivePreloader={setIsActivePreloader}
            />
        </Switch>
    );
}

export default App;
