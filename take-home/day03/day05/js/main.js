function testPassword() {
    const password = prompt("Enter a password");

    if (password.lenght < 6) {
        return alert('password is not long enough');

    }

    if (password.lenght > 20) {
        return alert('password too long');
    }

    const firstCharacter = password[0]

    const isLowercase = firstCharacter.charCodeAt(0) >= 96 &&
    firstCharacter.charCodeAt(0) <= 122;

    const isUppercase = firstCharacter.charCodeAt(0) >= 65 && 
    firstCharacter.charCodeAt(0) <= 90;

    if ( isLowercase || isUppercase){
        alert('password is valid');
    }
    
    else {
        alert('password does not start with a letter');
        return testPassword();
    }
}

//testPassword();

function testPassword2() {
    const password = prompt("enter a password");


//below are examples of regXP
    const isLetterPattern = /[a-zA-Z]/;
    const isCorrectLengthPattern = /^.{6,20}$/;


}