import firebase from "firebase/compat"

const login = ({email, password}) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Вы вошли в систему!")
            return userCredential.user.uid
        })
        .catch((error) => {
            console.log(error)
        })
}
const getAllCards = (userId) => {
    return firebase
        .database()
        .ref(`users/${userId}/cards`)
        .once('value')
        .then(data => data.val())
        .catch((error) => {
            console.log(error)
        })
}

export {
    login,
    getAllCards
}