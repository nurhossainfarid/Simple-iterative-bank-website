document.getElementById('submit-button').addEventListener('click', function (loginEvent) {
    // get user email
    const verifyEmail = document.getElementById('login-email');
    const userEmail = verifyEmail.value;
    // get user password
    const verifyPassword = document.getElementById('login-password');
    const userPassword = verifyPassword.value;
    if (userEmail == 'bapperbank@gmail.com' && userPassword == 'ILoveYouBaba') {
        window.location.href = 'bankCalculation.html'
    } else {
        console.log(verifyEmail.value, verifyPassword.value);
    }
})
