document.getElementById("login-submit").addEventListener("click", function () {
    // console.log("LoginIn Clicked");
    // userGet E-mail
    const emailField = document.getElementById("user-email")
    const userEmail = emailField.value;
    // console.log(userEmail)

    // getUserPassword
    const passwordField = document.getElementById("user-password")
    const userPassword = passwordField.value;
    // console.log(userPassword)

    if (userEmail == "mahadi123@gmail.com" && userPassword == "12345") {
        // console.log("Valid User");
        window.location.href = 'banking.html';
    } else {
        console.log("Invalid User")
    }
});