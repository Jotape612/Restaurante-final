firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../views/index.html";
    }
})