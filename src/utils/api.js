import firebase from "firebase/compat"

const showError = (text) => {
    console.log(text.code)
    console.log(text.message)
}

const login = ({email, password}) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Вы вошли в систему!");
            return userCredential.user.uid
        })
        .catch((error) => {
            showError(error)
        })
}

const getUserProfile = (userId) => {
    return firebase
        .database()
        .ref(`users/${userId}`)
        .once('value')
        .then(data => data.val())
        .catch((error) => {
            showError(error)
        })
}

const getAllUsers = () => {
    return firebase
        .database()
        .ref('users')
        .once('value')
        .then(data => data.val())
        .catch((error) => {
            showError(error)
        })
}

const updateNumbersOfLikes = (card, userId, currentNumberOfLikes) => {
    // console.log(card._id)
    return firebase
        .database()
        .ref(`/users/${userId}/cards/${card._id}`)
        .update({
            likes: currentNumberOfLikes,
        })
        .catch((error) => {
            showError(error)
        })
}

const addCard = (
    link,
    textLocation,
    textDescription,
    cards,
    myUserId
) => {
    return firebase
        .database()
        .ref(`users/${myUserId}/cards/${cards.length}`)
        .set({
            _id: cards.length,
            link,
            textLocation,
            textDescription,
            likes: 0
        })
        .then(() => {
            return firebase
                .database()
                .ref(`users/${myUserId}/cards/${cards.length}`)
                .once('value')
                .then(data => data.val())
                .catch((error) => {
                    showError(error)
                })
        })
        .catch((error) => {
        showError(error)
    })
}

const signOut = () => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('Вы вышли из аккаунта')
        })
        .catch((error) => {
        showError(error)
    })
}

export {
    login,
    getUserProfile,
    getAllUsers,
    updateNumbersOfLikes,
    addCard,
    signOut
}