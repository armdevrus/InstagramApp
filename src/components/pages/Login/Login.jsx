
import './Login.css'
import {useState} from "react";

const Login = ({
                   handleLogin
               }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnChangeEmail = event => setEmail(event.target.value)
    const handleOnChangePassword = event => setPassword(event.target.value)
    const handleOnSubmitButton = event => {
        event.preventDefault();
        handleLogin({password, email})
    }

    return(
        <>
            <section className="login">
                <div className="login__wrapper">
                    <h1 className="login__text">Добро пожаловать!</h1>
                    <form className="login__form" onSubmit={handleOnSubmitButton}>
                        <div className="login__input_wrapper">
                            <input
                                value={email}
                                onChange={handleOnChangeEmail}
                                id="input_type_email"
                                type="email"
                                className="login__input"
                                placeholder=" "
                                required
                            />
                            <label className="login__label">E-mail</label>
                        </div>
                        <div className="login__input_wrapper">
                            <input
                                value={password}
                                onChange={handleOnChangePassword}
                                id="input_type_password"
                                type="password"
                                className="login__input"
                                placeholder=" "
                                required
                            />
                            <label className="login__label">Пароль</label>
                        </div>
                        <button className="login__button">Войти</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Login