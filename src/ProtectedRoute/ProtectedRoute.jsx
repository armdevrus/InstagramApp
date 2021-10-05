import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";


const ProtectedRoute = ({component: Component, ...props})=>{
    const loggedInUser = useSelector((state) => state.loggedInUser.value)
    return(
        <Route>
            {
                () => loggedInUser ?
                    <Component {...props}/>
                    :
                    <Redirect to="/signin"/>
            }
        </Route>
    )
}
export default ProtectedRoute;