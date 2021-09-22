import React, {useEffect, useState} from "react";
import MyAccount from "./components/MyAccount/MyAccount";
import {
  login
} from "./api/api"

function App() {

  const [userId, setUserId] = useState('')

  const data = {
    email: "10@m.ru",
    password: "123456789"
  }

  const handleLogin = async ({email, password}) => {
    const userId = await login({email, password})
    setUserId(userId)
  }

  console.log(userId)
  useEffect(() => {
    handleLogin(data)
  },[])

  return (
    <MyAccount
      userId={userId}
    />
  );
}

export default App;
